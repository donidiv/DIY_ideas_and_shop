import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, appEmailValidator(['bg', 'com'])]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  })

  
  constructor(private fb: FormBuilder) {}

  login(): void {
    if(this.form.invalid){
      return
    }

    console.log(this.form.value);
    
  }
}
