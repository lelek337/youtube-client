
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submit", this.form.value);
  }
}
