import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardVar {

  topEmployees = [];
  topResorts = [];
  courses;
  badgesCertification;
  employeeTabLabel = 'Employee';
  resortTabLabel = 'Resort';
  employeeTabText = {
    'wishes' : 'Good Morning',
    'name' : 'Adams',
    'notification' : 'You have 5 important tasks today, Some messages and notifications. Finish them all! Or you can also'
  };
  symbols = {
     comma : ',',
     apostrophe : '!'
  };
  btns = {
     editTasks : 'Edit Tasks',
     quickTasks : 'Quick Tasks',
     openCalendar : 'Open Calendar'
  };
  employeeGridsTitle = {
     totalCourses : 'Total Courses',
     availableCourses : 'Available Courses',
     completedCourses : 'Completed Courses',
     videosTrend : 'Videos Trend',
     employeeProgress : 'Employee Progress',
     totalNoOfBadges : 'Total No. of Badges',
     certificationTrend : 'Employee Certification Trend',
     topEmployees : 'Top 10 Employess'
  };

  resortGridsTitle = {
     visitors : 'Visitors',
     staff : 'Staff',
     feedbackRating : 'Feedback & Rating',
     visitorsByResort : 'Visitors By Resort',
     reservationByResort : 'Reservation By Resort',
     topResorts : 'Top 10 Resorts',
     resort : 'Resort',
     badges: 'Badges',
     certification: 'Certification'
  };






}
