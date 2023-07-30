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

const {apiUrl} = environment

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    // todo private router: Router, private errorService: ErrorService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.startsWith('/api')){
      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(catchError((err)=>{
      // todo make error service...
      return [err];
    }))
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
};