import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{

  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';
  // static isLogged: boolean;

  // get isLogged() : boolean {
  //   return !!this.user;
  // }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user)=> {
      this.user = user;
    });
  }

  register( firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    rePass: string) {
      return this.http.post<User>('/api/users/register', {
        firstName,
        lastName,
        username,
        email,
        password,
        rePass,
      }).pipe(tap((user) => this.user$$.next(user)));
    }

  login(
    email: string,
    password: string) {
      return this.http.post<User>('/api/users/login', {email, password}).pipe(tap((user) => this.user$$.next(user)));
    }


    // todo get profile 
    
    // todo update profile



    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
