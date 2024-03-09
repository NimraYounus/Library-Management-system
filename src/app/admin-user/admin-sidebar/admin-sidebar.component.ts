import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent {
  @Output() routerLink = new EventEmitter<string>();
  @Input() sideNavStatus = false;
  selectedRouterLink = '';
  list = [
    { name: 'Home', icon: 'home', routerLink: 'admin/home' },
    {
      name: 'Analytics',
      icon: 'stacked_bar_chart',
      routerLink: 'admin/analytics',
    },
    {
      name: 'Total Books',
      icon: 'library_books',
      routerLink: 'admin/books',
    },
    {
      name: 'Add Book',
      icon: 'library_add',
      routerLink: 'admin/add-books',
    },
    {
      name: 'Issue Book',
      icon: 'library_add_check',
      routerLink: 'admin/issue-books',
    },
    { name: 'Members', icon: 'people', routerLink: 'admin/members' },
    {
      name: 'Terms & Conditions',
      icon: 'lock',
      routerLink: 'admin/Terms-Conditions',
    },
    {
      name: 'Settings',
      icon: 'settings',
      routerLink: 'admin/settings',
    },
  ];

  showSelectedListItem(route: string) {
    this.selectedRouterLink = route;
    this.routerLink.emit(this.selectedRouterLink);
    console.log('Navigating to:', this.selectedRouterLink);
  }
}
