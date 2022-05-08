import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private router:Router, private authGuard:AuthGuard) { }
  onLogin(text:string) {
    const login = localStorage.getItem('login');
    if (text !== login) {
      this.router.navigate(['/login/registration']);
    }
  }

  onRegistration(login:string, pass:string){
    localStorage.setItem('login', login);
    localStorage.setItem('pass', pass);
  }
}
