import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpXsrfTokenExtractor} from '@angular/common/http';
import { Cliente } from '../modelos/cliente';
import { Observable } from 'rxjs/Observable';
import {User} from '../modelos/user.model';
import {Router} from '@angular/router';
import {authenticateService} from './authenticate.service';
import { UrlConfigService } from '../url-config.service';
import {UserRoll} from '../modelos/user-roll';
const httpOptions= {
		headers: new HttpHeaders({'Content-Type':'Application/tex','Cookie':'JSESSIONID=4BD1BFC48B4148171D759EE5385154AE'})
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
	

	constructor(private _http: HttpClient, private router:Router,  private urlConfig: UrlConfigService) { }

	getUser(): Observable<any>{
		return this._http.get<User>(this.urlConfig.urlConfig+'user');
	}

	getUserRolls():Observable<any>{
		return this._http.get<UserRoll>(this.urlConfig.urlConfig+'getRoll');
	}


}
