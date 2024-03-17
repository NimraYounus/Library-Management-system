import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  overDuesPeople = [
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Karla Morrison',
      email: 'email123@gmail.com',
      status: 'ACTIVE',
      duedate: '17/3/2024',
      fine: '50',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Mamie Rodgers',
      email: 'email123@gmail.com',
      status: 'ACTIVE',
      duedate: '17/3/2024',
      fine: '150',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Terence Reese',
      email: 'email123@gmail.com',
      status: 'ACTIVE',
      duedate: '17/3/2024',
      fine: '100',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Karla Morrison',
      email: 'email123@gmail.com',
      status: 'ACTIVE',
      duedate: '17/3/2024',
      fine: '50',
    },

    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Diana Curry',
      email: 'email123@gmail.com',
      status: 'DEACTIVE',
      duedate: '17/3/2024',
      fine: '200',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Gilbert Santos',
      email: 'email123@gmail.com',
      status: 'ACTIVE',
      duedate: '17/3/2024',
      fine: '100',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Karla Morrison',
      email: 'email123@gmail.com',
      status: 'ACTIVE',
      duedate: '17/3/2024',
      fine: '50',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Mamie Rodgers',
      email: 'email123@gmail.com',
      status: '3',
      duedate: '17/3/2024',
      fine: '150',
    },
    {
      memberId: '#48964',
      registerid: '3012',
      memberName: 'Terence Reese',
      email: 'email123@gmail.com',
      status: 'DEACTIVE',
      duedate: '17/3/2024',
      fine: '100',
    },
  ];
  search() {
    //
  }
}
