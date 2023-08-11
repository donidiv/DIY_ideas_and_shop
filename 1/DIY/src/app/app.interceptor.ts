import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { ErrorService } from './core/error/error.service';

const {apiUrl} = environment

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errorService: ErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.startsWith('/api')){
      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(catchError((err)=>{
      this.errorService.setError(err);

      if(err.status === 401){
        this.router.navigate(['/users/login']);
      } else {
        this.errorService.setError(err);
        this.router.navigate(['/error']);
        // this.router.navigate(['/users/register']);//proba
      }
      return [err];
    }))
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
};