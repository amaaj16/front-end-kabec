import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConfigService } from '../url-config.service';
import { Observable } from 'rxjs/Observable';
import { Banco } from '../modelos/banco.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': '/json' }),
  responseType: "text"
};

@Injectable()
export class BancoService {

  constructor(private http:HttpClient, private urlConfig:UrlConfigService) {}

  //private bancoUrl = 'http://localhost:8080/user-portal/banco';

  public getBanco() {
    return this.http.get<Banco[]>(this.urlConfig.urlConfig+'banco');
  }

  public deleteBanco(banco): Observable<any>  {
    return this.http.get(this.urlConfig.urlConfig+"banco" + "/"+"deleteBancos/"+ banco.idBanco);
  }

  public createBanco(banco){
    return this.http.post<Banco>(this.urlConfig.urlConfig+'banco', banco);
  }

}
