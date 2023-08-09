import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  };

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, appEmailValidator(['bg', 'com'])]],
    username: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe((user) => {
      const { firstName, lastName, email, username } = user;
      this.profileDetails = {
        firstName,
        lastName,
        email,
        username,
      };
      this.form.setValue({ firstName, lastName, email, username });
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;
    const { firstName, lastName, email, username } = this.profileDetails;
    this.userService
      .updateProfile(firstName!, lastName!, email!, username!)
      .subscribe(() => {
        this.toggleEditMode();
      });
  }
}
