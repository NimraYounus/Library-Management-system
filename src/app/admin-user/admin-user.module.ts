import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AnalyticsComponent } from './admin-sidebar/sideBar-item/analytics/analytics.component';
import { BooksComponent } from './admin-sidebar/sideBar-item/books/books.component';
import { AddBooksComponent } from './admin-sidebar/sideBar-item/add-books/add-books.component';
import { IssueBookComponent } from './admin-sidebar/sideBar-item/issue-book/issue-book.component';
import { MembersComponent } from './admin-sidebar/sideBar-item/members/members.component';
import { TermsConditionComponent } from './admin-sidebar/sideBar-item/terms-condition/terms-condition.component';
import { SettingsComponent } from './admin-sidebar/sideBar-item/settings/settings.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AnalyticsComponent,
    BooksComponent,
    AddBooksComponent,
    IssueBookComponent,
    MembersComponent,
    TermsConditionComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
})
export class AdminUserModule {}