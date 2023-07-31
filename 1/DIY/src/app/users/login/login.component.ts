import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { UserService } from '../user.service';

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

  
  constructor(private fb: FormBuilder, private userService: UserService
    // todo private router: Router
    ) {}

  login(): void {
    if(this.form.invalid){
      console.log('invalid');
      
      return
    }
    console.log('valid');
    

   const {email, password} = this.form.value;

   this.userService.login(email!, password!).subscribe(() => {
    console.log('logged!');
    // !    this.router.navigate(['/themes']);
    

   })
    
  }
}
