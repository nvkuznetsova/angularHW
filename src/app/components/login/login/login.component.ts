import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  isLogginIn = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onLogin(): void {
    this.isLogginIn = true;
    this.authService
      .login()
      .subscribe(() => {
        if (this.authService.isLoggedIn) {
          this.router.navigateByUrl('/admin');
        }
        this.isLogginIn = false;
      });
  }

  onLogout(): void {
    this.authService.logout();
  }

}
