import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { LoginService } from 'src/app/services/gestion-utilisateur/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //public loginForm: FormGroup;
  public user = new Utilisateur();
  public erreur = 0;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /*this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });*/
  }
  

  public onLogin(){
    console.log("usernameeee:", this.user.userName);
    this.loginService.getUserFromDB(this.user.userName).subscribe((usr: Utilisateur) =>{
      console.log("userrr: ",usr);
      if(usr.password == this.user.password ){
        this.loginService.login(usr);
        this.router.navigate(['']);
      }
      else{
        this.erreur =1;
      }
    },(err) => console.log(err));
    /*if(this.loginService.isAuthenticated){
      this.loginService.saveAuthenticatedUser();
      this.router.navigate(['']);
    }*/
  }

}

//https://www.codejava.net/frameworks/spring-boot/spring-security-forgot-password-tutorial

//https://www.javatpoint.com/angular-spring-crud-example
