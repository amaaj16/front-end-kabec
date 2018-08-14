import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConfigService } from '../url-config.service';

import { Nomina } from '../modelos/nomina.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NominaService {

  constructor(private http:HttpClient, private urlConfg:UrlConfigService) {}

  //private nominaUrl = 'http://localhost:8080/user-portal/nomina';

  public getNomina() {
    return this.http.get<Nomina[]>(this.urlConfg.urlConfig+'nomina');
  }

  public deleteNomina(nomina) {
    return this.http.get(this.urlConfg.urlConfig+'nomina' + "/"+"delNomina?idNomina="+ nomina.contratoNomina);
  }

  public createNomina(nomina) {
    return this.http.post<Nomina>(this.urlConfg.urlConfig+'nomina', nomina);
  }

}
