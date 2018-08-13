import { Injectable } from '@angular/core';
import {Periodo} from '../modelos/periodo';
import {HttpClient,HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { UrlConfigService } from '../url-config.service';


const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "Application/Json" })

};
@Injectable({
  providedIn: 'root'
})


export class PeriodoService {

  constructor(private _http:HttpClient, private urlConfig:UrlConfigService) {
}
  getAllPeriodos():Observable<any>{
		return this._http.get<Periodo>(this.urlConfig.urlConfig + 'showPeriodos');
	}

	deletePeriodo(Periodo:Periodo){
		return this._http.delete(this.urlConfig.urlConfig + 'deletePeriodo?idPeriodo=' + Periodo.idperiodo);
	}

	addPeriodo(Periodo:Periodo){
		return this._http.post(this.urlConfig.urlConfig + 'addPeriodo', Periodo, httpOptions);
	} 

}

