import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConfigService } from '../url-config.service';

import { Banco } from '../modelos/banco.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BancoService {

  constructor(private http:HttpClient, private urlConfig:UrlConfigService) {}

  //private bancoUrl = 'http://localhost:8080/user-portal/banco';

  public getBanco() {
    return this.http.get<Banco[]>(this.urlConfig.urlConfig+'banco');
  }

  public deleteBanco(banco) {
    return this.http.delete(this.urlConfig.urlConfig+'banco' + "/"+ banco.idBanco);
  }

  public createBanco(banco) {
    return this.http.post<Banco>(this.urlConfig.urlConfig+'banco', banco);
  }

}
