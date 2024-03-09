import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  sideNavStatus = false;
  selectedRouterLink = '';

  constructor(private router: Router) {}

  onRouterLink(routerLink: string) {
    this.selectedRouterLink = routerLink;
    this.router.navigateByUrl(routerLink); // Navigate to the selected router link
  }
}
