import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home', //  0
    link: '/student/home/',
    icon: 'home-outline',
    home: true,
    hidden: false,
  },
  {
    title: 'My Institutes', //  1
    link: '/student/my-institutes/',
    icon: 'layers-outline',
    hidden: false,
  },
  {
    title: 'Dashboard', //  2
    link: '/student/dashboard/',
    icon: 'layout-outline',
    hidden: true,
  },
  {
    title: 'Announcements', //  3
    link: '/student/announcements/',
    icon: 'message-square-outline',
    hidden: true,
  },
  {
    title: 'Schedule', //  4
    link: '/student/schedule/',
    icon: 'calendar-outline',
    hidden: true,
  },
  {
    title: 'Attendance', //  5
    link: '/student/attendance/',
    icon: 'checkmark-square-outline',
    hidden: true,
  },
  {
    title: 'Upcoming Tests', //  6
    link: '/student/tests/',
    icon: 'edit-2-outline',
    hidden: true,
  },
  {
    title: 'Performance Report', //  7
    link: '/student/performanceReport/',
    icon: 'activity-outline',
    hidden: true,
  },
  {
    title: 'Study Materials', //  8
    link: '/student/studentMaterial/',
    icon: 'book-open-outline',
    hidden: true,
  },
  {
    title: 'Forums', //  9
    link: '/student/forumsAndChats/',
    icon: 'book-outline',
    hidden: true,
  },
  {
    title: 'Enrollment Details', //  10
    link: '/student/enrollmentDetails/',
    icon: 'bookmark-outline',
    hidden: true,
  },
  {
    title: 'Meetings', //  11
    link: '/student/meeting/',
    icon: 'people-outline',
    hidden: true,
  },
  {
    title: 'Mentoring', //  12
    link: '/student/mentoring/',
    icon: 'person-outline',
    hidden: true,
  },
  {
    title: 'EA Live', //  13
    link: '/student/onlineClasses/',
    icon: 'globe-outline',
    hidden: true,
  },
  {
    title: 'EA Live', //  14
    link: '/student/onlineClassLinks/',
    icon: 'globe-outline',
    hidden: true,
  },
];
