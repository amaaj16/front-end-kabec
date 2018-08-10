import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import {Perfil} from '../modelos/perfil';
import {Observable} from 'rxjs/Observable';
import { LayoutService } from 'angular-admin-lte';
import { UrlConfigService } from '../url-config.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilserviceService {

  constructor(private _http:HttpClient, private _urlConfig: UrlConfigService) { }

  getPerfiles(): Observable<any>{
  	return this._http.get<Perfil>(this._urlConfig+'perfiles');
  }

  deletePerfil(perfil:Perfil){
  	return this._http.delete(this._urlConfig+'deletePerfil?idPerfil='+perfil.idPerfil)
  }
}
