import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConfigService } from '../url-config.service';
import { Observable } from 'rxjs/Observable';
import { Complemento } from '../modelos/complemento.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ComplementoService {

  constructor(private http:HttpClient, private urlConfig:UrlConfigService) {}

  //private complementoUrl = 'http://localhost:8080/user-portal/complemento';

  public getComplemento() {
    return this.http.get<Complemento[]>(this.urlConfig.urlConfig+'complemento');
  }

  public deleteComplemento(complemento) {
    return this.http.get(this.urlConfig.urlConfig+'complemento' + "/"+"deleteComplemento?idComplemento="+ complemento.empComplemento);
  }

  public createComplemento(complemento){
    return this.http.post<Complemento>(this.urlConfig.urlConfig+'complemento', complemento);
  }

}
