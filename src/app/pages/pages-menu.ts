import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin Home',
    icon: 'home-outline', //  0
    link: '/pages/home',
    home: true,
  },

  {
    title: 'Institute',
    icon: 'home-outline', //  1
    hidden: true,
    children: [
      {
        title: 'Add Institute',
        link: '/pages/membership',
        queryParams: { type: 'new' },
      },
      {
        title: 'Manage Institute',
        link: '/pages/institute/manage-institute',
      },
    ],
  },

  {
    title: 'Institute Dashboard',
    icon: 'layout-outline', // 2
    link: '',
    pathMatch: 'full',
    hidden: true,
  },

  {
    title: 'Daily Links',
    hidden: true, // 3
  },

  {
    title: 'Branch Configuration',
    icon: 'share-outline', // 4
    link: '/pages/institute/branch-config',
    hidden: true,
    children: [
      {
        title: 'Courses',
        link: '/pages/institute/branch-config/manage-course',
      },
      {
        title: 'Batches',
        link: '/pages/institute/branch-config/manage-batch',
      },
      {
        title: 'Discounts',
        link: '/pages/institute/branch-config/manage-discount',
      },
      {
        title: 'Receipt',
        link: '/pages/institute/branch-config/manage-receipt',
      },
      {
        title: 'Employee Roles',
        link: '/pages/institute/branch-config/manage-employee',
      },
    ],
  },

  {
    title: 'Student Register',
    icon: 'person-outline',
    hidden: true, // 5
    children: [
      {
        title: 'Add Students',
        link: '/pages/institute/add-students',
      },
      {
        title: 'Active Student',
        link: '/pages/institute/manage-students',
      },
      {
        title: 'Pending Student',
        link: '/pages/institute/pending-students',
      },
    ],
  },
  {
    title: 'Communications', // 6
    icon: 'message-circle-outline',
    hidden: true,
    children: [
      {
        title: 'Announcements',
        link: '',
      },
      {
        title: 'Forums',
        link: '',
      },
    ],
  },

  {
    title: 'Tests',
    icon: 'edit-2-outline',
    hidden: true,
    children: [
      {
        title: 'Define Test',
      }, // 7
      {
        title: 'View Report',
      },
    ],
  },

  {
    title: 'Student Reports',
    icon: 'activity-outline',
    hidden: true,
    children: [
      {
        title: 'Attendance Summary',
        hidden: true,
      }, // 8
      {
        title: 'Performance',
        hidden: true,
      },
      {
        title: 'Remarks',
        hidden: true,
      },
      {
        title: 'Mentoring',
      },
      {
        title: 'Schedule PTMs',
      },
    ],
  },

  {
    title: 'Reports',
    // icon: 'fa fa-bar-chart',
    hidden: true,
    children: [
      {
        title: 'Finance reports', // 9
      },
      {
        title: 'ETC',
      },
    ],
  },

  {
    title: 'LEAD MANAGER', // 10
    icon: '',
    hidden: true,
  },

  {
    title: 'Class Schedules', // 11
    icon: 'calendar-outline',
    link: '/pages/institute/add-schedule/1',
    hidden: true,
  },

  {
    title: 'Attendance',
    icon: 'checkmark-square-outline',
    link: '',
    hidden: true, // 12
  },

  {
    title: 'EA Live',
    icon: 'globe-outline',
    link: '',
    hidden: true, // 13
    children: [
      {
        title: 'Settings',
        hidden: true,
      },
      {
        title: 'Create Class',
        hidden: true,
      },
      {
        title: 'Manage Class',
        hidden: true,
      },
    ],
  },

  {
    title: 'EA Live',
    icon: 'globe-outline',
    link: '',
    hidden: true, // 14
    children: [
      {
        title: 'Create Class',
        hidden: true,
      },
      {
        title: 'Manage Class',
        hidden: true,
      },
      {
        title: 'Utilities',
        hidden: true,
      },
    ],
  },

  {
    title: 'EA Live',
    icon: 'globe-outline',
    link: '',
    hidden: true, // 15
  },

  {
    title: 'Leads Manager',
    icon: 'bulb-outline',
    link: '',
    hidden: true, // 16
  },

  {
    title: 'Study Material',
    icon: 'book-open-outline',
    link: '',
    hidden: true, // 17
  },
];
