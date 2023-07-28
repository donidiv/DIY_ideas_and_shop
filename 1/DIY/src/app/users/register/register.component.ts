import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(['bg', 'com'])]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(3)]],
        rePass: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePass')],
      }
    )
  })

  constructor(private fb: FormBuilder) {
  }
  register(): void {
    //
    if(this.form.invalid){
      //console.log(this.form.value);
      return;
    }
    
    console.log(this.form.value);
    
  }

}
