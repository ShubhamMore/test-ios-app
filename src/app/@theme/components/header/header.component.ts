import { StudentService } from './../../../services/student.service';
import { InstituteService } from './../../../services/institute.service';
import { AuthService } from './../../../services/auth-services/auth.service';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  NbMenuService,
  NbSidebarService,
  NbThemeService,
  NbPopoverDirective,
  NbWindowRef,
  NbDialogService,
} from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { Subject, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { RoleAssignService } from '../../../services/role/role-assign.service';
import { NbWindowService } from '@nebular/theme';
import { SocketioService } from '../../../services/chat.service';
import { MenuController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  chatMembers: any;
  messages: any[];

  @ViewChild('chatWindow', { static: false }) chatWindow: TemplateRef<any>;
  @ViewChild(NbPopoverDirective, { static: false }) chatPopup: NbPopoverDirective;

  notifications: any;
  chatmessage = {};

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean;
  institutes: any[];
  institute: any;
  name: string;
  user: any;
  socket: any;
  employeeChatFilter: string;
  studentChatFilter: string;
  openedChatWindows: NbWindowRef[] = [];
  notificationCount: number = 0;
  selectedInstitute: any;
  instituteChangeSubscription: Subscription;
  userMenu = [
    // { title: 'Edit Profile' },
    { title: 'Change Password', link: 'pages/change-password' },
  ];

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  constructor(
    private authService: AuthService,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private api: ApiService,
    private studentService: StudentService,
    private layoutService: LayoutService,
    private router: Router,
    private route: ActivatedRoute,
    private instituteService: InstituteService,
    private roleService: RoleAssignService,
    private windowService: NbWindowService,
    private chatService: SocketioService,
    private dialogService: NbDialogService,
    private menu: MenuController,
    private localNotifications: LocalNotifications,
  ) {
    this.instituteChangeSubscription = this.instituteService.selectedInstitute.subscribe(
      (instituteId: any) => {
        this.selectedInstitute = instituteId;
      },
    );
  }

  ngOnInit() {
    this.userPictureOnly = false;
    this.institutes = [];
    this.institute = '';
    this.user = this.authService.getUser();
    this.name = `${this.user.name}
      (${this.user.role})`;

    this.getInstitutes();
    this.chatService.getChatMembers();
    this.getMembers();
    this.getNotifications();
    this.chatService.setupSocketConnection();
    this.socket = this.chatService.getSocket();
    /*Listeneing to notifications*/
    this.socket.on('notify', (notification: any) => {
      this.notificationCount++;
      this.notifications.push(notification);
      this.localNotifications.schedule({
        id: 1,
        title: notification.title,
        text: notification.message,
        trigger: { single: true },
        foreground: true,
      });
    });
    /*Listeneing to messages*/
    this.socket.on('message', (message) => {
      if (!this.chatmessage[message.receiverId]) {
        this.openChatBoxForNewIncomingMessage(message);
      }
      if (!message.msg.reply) {
        this.localNotifications.schedule({
          id: 1,
          title: 'New Message from ' + message.msg.user.name,
          text: message.msg.text,
          trigger: { single: true },
          foreground: true,
        });
      }

      this.chatmessage[message.receiverId].messages.push(message.msg);
    });
  }
  send(message: any) {
    this.socket.emit('message', message);
  }
  openChatBoxForNewIncomingMessage(message) {
    const user = {
      eduAtlasId: message.receiverId,
      basicDetails: {
        name: message.msg.user.name,
      },
    };
    this.openChatBox(user, null);
  }

  getInstitutes() {
    if (this.user.role === 'institute') {
      this.api.getInstitutes().subscribe((data: any[]) => {
        this.institutes = data;
      });
    } else if (this.user.role === 'employee') {
      this.api.getEmployeeInstitutes({ email: this.user.email }).subscribe((inst: any) => {
        this.instituteService.setInstitutes(inst);
      });
    } else if (this.user.role === 'student') {
      this.studentService.setStudent(this.user);
      this.studentService.getInstitutesOfStudent(this.user._id).subscribe((inst: any) => {
        this.instituteService.setInstitutes(inst);
      });
    } else {
    }
  }

  setInstitutes() {
    this.institutes = [];
    this.institutes = this.instituteService.getInstitutes();
  }
  getMembers() {
    this.chatMembers = this.chatService.getMembers();
  }

  onSelect(event: any) {
    if (event !== '') {
      this.institute = event;
      this.instituteService.setInstitute(event);
      if (this.user.role === 'institute') {
        this.router.navigate(['/pages/dashboard/', event], { relativeTo: this.route.parent });
      } else if (this.user.role === 'employee') {
        const role = this.getEmployeeRole(event);
        this.roleService.assignRoles(role);
        this.router.navigate(['/pages/dashboard/', event], { relativeTo: this.route.parent });
      } else if (this.user.role === 'student') {
        const institute = this.institutes.find((inst: any) => inst._id === event);
        this.studentService.setInstitute(institute);
        this.router.navigate(['/student/dashboard/', event], {
          relativeTo: this.route.parent,
        });
      }
    }
  }
  deleteNotification(notificationId, index, seen) {
    this.api.deleteNotification({ notificationId: notificationId }).subscribe((res) => {
      if (!seen) {
        if (this.notificationCount > 0) {
          this.notificationCount--;
        }
      }
      this.notifications.splice(index, 1);
    });
  }
  getEmployeeRole(instituteId: any) {
    const institiute = this.institutes.find((institute) => {
      return instituteId === institute._id;
    });
    if (institiute) {
      return institiute.role;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.openedChatWindows.forEach((openedWindow: NbWindowRef) => {
      openedWindow.close();
    });
    this.notificationCount = 0;
    this.chatService.clearChatMembers();
    this.instituteChangeSubscription.unsubscribe();
  }

  openChatBox(user: any, listType: string) {
    if (listType && listType === 'instituteList') {
      user.basicDetails = {};
      user.basicDetails.name = user.instituteUsers.name;
      user.eduAtlasId = user.instituteUsers.eduAtlasId;
    } else if (listType && listType === 'teacherDetails') {
      user.basicDetails = {};
      user.basicDetails.name = user.teachers.name;
      user.eduAtlasId = user.teachers.eduAtlasId;
    }
    this.chatPopup.hide();
    if (!this.chatmessage[user.eduAtlasId]) {
      this.chatmessage[user.eduAtlasId] = {
        messages: [],
        size: 'large',
      };
      this.api.getChats({ receiverId: user.eduAtlasId }).subscribe((data: any) => {
        if (data) {
          this.chatmessage[user.eduAtlasId].messages = data;
        }
      });
      const windowRef = this.windowService.open(this.chatWindow, {
        title: user.basicDetails.name,
        context: { userId: user.eduAtlasId, userName: user.basicDetails.name },
      });
      windowRef.maximize();
      this.openedChatWindows.push(windowRef);
      windowRef.onClose.subscribe((data: any) => {
        delete this.chatmessage[user.eduAtlasId];
      });
    }
  }
  sendMessage(messages, event, receiverData) {
    this.send({
      receiverId: receiverData.userId,
      message: event.message,
      receiverName: receiverData.userName,
    });
  }
  getNotifications() {
    this.api.getNotifications().subscribe(
      (res: any) => {
        this.notifications = res;
        this.notifications.map((notification: any) => {
          if (!notification.seen) {
            this.notificationCount++;
          }
          notification.date = new Date(notification.date);
          return notification;
        });
      },
      (err) => {},
    );
  }
  openNotificationBox(notification, notificationDialog: TemplateRef<any>) {
    this.dialogService.open(notificationDialog, { context: notification });
    this.api.seenNotification({ notification: notification._id }).subscribe((res) => {
      this.notifications.map((singleNotification) => {
        if (singleNotification._id === notification._id && !notification.seen) {
          if (this.notificationCount > 0) {
            this.notificationCount--;
          }
          return (singleNotification.seen = true);
        } else {
          return singleNotification;
        }
      });
    });
  }
  filterChatsForEmployee() {
    this.chatMembers.employeeDetails = this.chatMembers.employeeDetails.map((employee) => {
      if (
        employee.basicDetails.name.toLowerCase().includes(this.employeeChatFilter.toLowerCase())
      ) {
        employee.filterOut = false;
        return employee;
      } else {
        employee.filterOut = true;
        return employee;
      }
    });
  }
  filterChatsForStudents() {
    this.chatMembers.studentsDetails = this.chatMembers.studentsDetails.map((student) => {
      if (student.basicDetails.name.toLowerCase().includes(this.studentChatFilter.toLowerCase())) {
        student.filterOut = false;
        return student;
      } else {
        student.filterOut = true;
        return student;
      }
    });
  }
  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.menu.toggle();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    this.authService.logout();
  }
  constructDate(dateInMillisecond: number) {
    const date = new Date(dateInMillisecond);
    return `${this.appendZero(date.getMonth() + 1)}-${this.appendZero(
      date.getDate(),
    )}-${date.getFullYear()}`;
  }
  appendZero(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }
}
