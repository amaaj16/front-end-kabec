import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,HttpErrorResponse } from '@angular/common/http';
import{User} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class InterceptorPeticionesService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<User>, next: HttpHandler): Observable<HttpEvent<any>> {
  const clonedRequest = req.clone({
    responseType: 'text'
  });

  return next.handle(clonedRequest)
    .map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        return event.clone({
          body: JSON.parse(event.body),
        });
      }
    })
    .catch((error: HttpErrorResponse) => {
        const parsedError = Object.assign({}, error, { error: JSON.parse(error.error) });
        return Observable.throw(new HttpErrorResponse(parsedError));
    });
}
}
