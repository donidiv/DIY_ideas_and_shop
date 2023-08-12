import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';
  static isLogged: boolean;

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {


    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
      debugger;
      console.log(this.user);
    });
  }

  register(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    rePass: string
  ) {
    return this.http
      .post<User>('/api/users/register', {
        firstName,
        lastName,
        username,
        email,
        password,
        rePass,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile/personalInfo').pipe(
      tap((user) => {
        this.user$$.next(user);
        debugger;
        console.log(this.user);
      })
    );
  }
  getBalance() {
    return this.http
      .get<User>('/api/users/profile/balance')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(
    firstName: string,
    lastName: string,
    email: string,
    username: string
  ) {
    return this.http
      .put<User>('/api/users/profile/personalInfo', {
        firstName,
        lastName,
        email,
        username,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<User>('/api/users/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getUsersIdeas(id: string) {
    return this.http
      .get<User>(`/api/users/${id}/profile`)
      .pipe(tap((user) => user));
  }

  getUserIdeas() {
    return this.http.get<User>('/api/home').pipe(tap((user) => user));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
