import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user.model';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public readonly url_user: string = "http://localhost:8089/users/login";


  public isAuthenticated: boolean = false;
  public authenticatedUser: string;
  public troles: Role[];
  //public token: string;

  /*public users = [
    {username: 'admin', password: '1234', roles: ['ADMIN','USER']},
    {username: 'user1', password: '1234', roles: ['USER']},
    {username: 'user2', password: '1234', roles: ['USER']}
  ];*/

constructor(private http: HttpClient, private router: Router) { }

public getUserFromDB(userName: string): Observable<Utilisateur>{
  const url = `${this.url_user}/${userName}`;
  return this.http.get<Utilisateur>(url);
}

public login(user: Utilisateur){
  this.authenticatedUser = user.userName;
  this.isAuthenticated = true;
  //this.getUserRoles(user.userName);
  this.troles = user.troles;
  localStorage.setItem('authenticatedUser', this.authenticatedUser);
  localStorage.setItem('isAuthenticated', String(this.isAuthenticated));
  //localStorage.setItem('userRole', String(this.troles));

}

/*public login(username: string, password: string) {
  let user;
  this.users.forEach(u =>{
    if(u.username == username && u.password == password){
      user = u;
      this.token = btoa(JSON.stringify({username:u.username, roles:u.roles}));
    }
  });
  if(user){
    this.isAuthenticated = true;
    this.authenticatedUser = user;
    localStorage.setItem("authToken", JSON.stringify(this.authenticatedUser));
  }
  else {
    this.isAuthenticated = false;
    this.authenticatedUser = undefined;
  }
}*/

/*public loadAuthenticatedUserFromLocalStorage(){
  let t = localStorage.getItem("authToken");
  if (t){
    let user = JSON.parse(atob(t));
    console.log("user: ",user);
    this.authenticatedUser = {username:user.username, roles:user.roles};
    console.log("authUserrr: ",this.authenticatedUser);
    this.isAuthenticated = true;
    this.token = t;
  }
}*/

public isAdmin(): boolean{
  let admin: boolean = false;
  if(!this.troles)
      return false;
      
  this.troles.forEach((currRole) =>{
    if(currRole.roleName =='ADMIN'){
      admin = true;
    }
  });
  return admin;
}

/*public isAdmin(){
  if(this.authenticatedUser){
    if(this.authenticatedUser.roles.indexOf('ADMIN') > -1)
        return true;
  }
  return false;
  }*/

/*public saveAuthenticatedUser(){
  if(this.authenticatedUser){
    localStorage.setItem("authToken", this.token);
  }
}*/

public logout(){
  this.isAuthenticated = false;
  this.authenticatedUser = undefined;
  this.troles = undefined;
  localStorage.removeItem('authenticatedUser');
  localStorage.setItem('isAuthenticated', String(this.isAuthenticated));
  this.router.navigate(['/login']);


}

public loadLoggedUserFromLocalStorage(){
  let userName = localStorage.getItem("authenticatedUser");
  if(userName){
    this.authenticatedUser = userName;
    this.isAuthenticated = true;
    this.getUserRoles(this.authenticatedUser);
  }
  
}

public getUserRoles(userName: string){
  this.getUserFromDB(userName).subscribe((user: Utilisateur) =>{
    console.log("userAvantRole: ",user)
    console.log("userAvecctRole: ",user.troles)
    this.troles = user.troles;
  });
}

/*public logout(){
  //removeTokenFromLocalStorage
  localStorage.removeItem("authToken");
  this.isAuthenticated = false;
  this.token = undefined;
  this.authenticatedUser = undefined;
}*/

}
