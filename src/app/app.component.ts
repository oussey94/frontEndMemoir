import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/gestion-utilisateur/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd-MemoireM2sir';

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginService.loadLoggedUserFromLocalStorage();
    /*
    let isAuthenticated: string;
    let authenticatedUser: string;

    localStorage.getItem('authenticatedUser');
    localStorage.getItem('isAuthenticated');
    if(isAuthenticated != "true" || !authenticatedUser){
      this.router.navigate(['/login']);
    }
    else{
      this.loginService.setLoggedUserFromLocalStorage(authenticatedUser);
    }*/
  }

  public onLogout(): void{
    this.loginService.logout();
  }
}
