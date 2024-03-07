import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AnalyticsComponent } from './admin-sidebar/sideBar-item/analytics/analytics.component';
import { BooksComponent } from './admin-sidebar/sideBar-item/books/books.component';
import { AddBooksComponent } from './admin-sidebar/sideBar-item/add-books/add-books.component';
import { IssueBookComponent } from './admin-sidebar/sideBar-item/issue-book/issue-book.component';
import { MembersComponent } from './admin-sidebar/sideBar-item/members/members.component';
import { TermsConditionComponent } from './admin-sidebar/sideBar-item/terms-condition/terms-condition.component';
import { SettingsComponent } from './admin-sidebar/sideBar-item/settings/settings.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'books', component: BooksComponent },
      { path: 'add-books', component: AddBooksComponent },
      { path: 'issue-books', component: IssueBookComponent },
      { path: 'members', component: MembersComponent },
      { path: 'Terms-Conditions', component: TermsConditionComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
