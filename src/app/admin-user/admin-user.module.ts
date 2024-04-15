import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnalyticsComponent } from './admin-sidebar/sideBar-item/analytics/analytics.component';
import { BooksComponent } from './admin-sidebar/sideBar-item/books/books.component';
import { AddBooksComponent } from './admin-sidebar/sideBar-item/add-books/add-books.component';
import { IssueBookComponent } from './admin-sidebar/sideBar-item/issue-book/issue-book.component';
import { MembersComponent } from './admin-sidebar/sideBar-item/members/members.component';
import { TermsConditionComponent } from './admin-sidebar/sideBar-item/terms-condition/terms-condition.component';
import { SettingsComponent } from './admin-sidebar/sideBar-item/settings/settings.component';
import { AdminRountingModule } from './admin-user-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { BooksListComponent } from './admin-sidebar/sideBar-item/books/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';

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
    BooksListComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HighchartsChartModule,
    AdminRountingModule,
    HttpClientModule,
  ],
})
export class AdminUserModule {}
