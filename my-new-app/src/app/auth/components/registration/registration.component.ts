import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  form: FormGroup;

  constructor(private registration:RegistrationService, private router:Router ) {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    this.registration.onRegistration(this.form.value.login, this.form.value.pass);
  }
  onClick() {
    this.router.navigate(['/main'])
  }
}
