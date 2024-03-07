import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }

  onSignUp() {
    this.router.navigate(['/SignUp']);

  }
}
