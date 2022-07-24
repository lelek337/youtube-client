import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard'

export const AUTH_DATA = 'user-data';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private myLogin = localStorage.getItem('login');
  private myPassword = localStorage.getItem('pass');
  constructor(private router:Router, private authGuard:AuthGuard) {}

  login(email: string, password: string) {
    !!localStorage.getItem(AUTH_DATA) &&
    this.myLogin === email &&
    this.myPassword === password?
    this.router.navigate(['/main']):
    this.router.navigate(['/login/registration']);
  }

  getAuthenticated() {
    return !!localStorage.getItem(AUTH_DATA);
  }

  onRegistration(login:string, pass:string){
    localStorage.setItem('login', login);
    localStorage.setItem('pass', pass);
  }
}
