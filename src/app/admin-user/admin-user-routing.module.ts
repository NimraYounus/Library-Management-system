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
  { path: 'admin', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/analytics', component: AnalyticsComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'admin/add-books', component: AddBooksComponent },
  { path: 'admin/issue-books', component: IssueBookComponent },
  { path: 'admin/members', component: MembersComponent },
  {
    path: 'admin-dashoard/Terms-Conditions',
    component: TermsConditionComponent,
  },
  { path: 'admin-dashoard/settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRountingModule {}
