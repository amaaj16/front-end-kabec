import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,HttpErrorResponse } from '@angular/common/http';
import{User} from '../modelos/user.model';
import {ServicioAreaService} from '../servicios/servicio-area.service';
import {Token} from '../modelos/token';
@Injectable({
  providedIn: 'root'
})
export class InterceptorPeticionesService implements HttpInterceptor {
  token: Token;
  constructor(private _auth: ServicioAreaService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  this._auth.getToken().subscribe(data=>{
    this.token=data;
  });
  
  const clonedRequest = req.clone({
    responseType: 'json',
    headers: req.headers.set('Authorization',this.token.token);
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
