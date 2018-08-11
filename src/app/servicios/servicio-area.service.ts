import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Area} from '../modelos/area';
import { UrlConfigService } from '../url-config.service';
import {RequestOptions, Request, RequestMethod, ResponseContentType} from '@angular/http';
import {Token} from '../modelos/token';

const httpOptions = {

	headers: new HttpHeaders({ "Content-Type": "application/json"})

};




@Injectable({
  providedIn: 'root'
})
export class ServicioAreaService {
 response: any;
 private handlerError(error: HttpErrorResponse){
 	if(error.error instanceof ErrorEvent){
 		console.error("Existe un error:", error.error.message);
 	} else{
 		console.error(`Backend return code ${error.status},`+`body was:${error.error}`);
 	}

 };
  constructor(private _httpCliente: HttpClient, private urlConfig:UrlConfigService) { }

	//private urlAreas = "http://localhost:8080/user-portal/area/";



  getAll():Observable<any>{
	  return this._httpCliente.get<Area>(this.urlConfig.urlConfig+'ShowAreas');
  }

  deleteArea(area: Area){
	  return this._httpCliente.delete(this.urlConfig.urlConfig + 'delArea?idArea=' + area.idArea);

	};

	createArea(area:Area, token: Token): Observable<any>{
		return	this.response=this._httpCliente.post<Area>(this.urlConfig.urlConfig + 'addArea', area, httpOptions);
	}

	getToken(): Observable<any>{
		return this._httpCliente.get<Token>(this.urlConfig.urlConfig+'token');
	}

}
