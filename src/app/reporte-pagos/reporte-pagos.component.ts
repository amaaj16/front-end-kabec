import { Component, OnInit } from '@angular/core';
import {PagosAnexosService} from '../servicios/pagos-anexos.service';
import {Router} from '@angular/router';
import {PagosAnexos} from '../modelos/pagos-anexos';
import {Anexo} from '../modelos/anexo';
import {RegistroAsignacion} from '../modelos/registro-asignacion';
import { LayoutService } from 'angular-admin-lte';


@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html',
  styleUrls: ['./reporte-pagos.component.css']
})
export class ReportePagosComponent implements OnInit {
	pagosAnexos: PagosAnexos[];
	anexos: Anexo[];
	registros: RegistroAsignacion[];
  constructor(private _router:Router, private _servicePagoAnexo: PagosAnexosService) { }

  ngOnInit() {

	  this._servicePagoAnexo.getReport().subscribe(data=>{
		  this.pagosAnexos = data;
		  
		  console.log(data);
	  }, Error => {
		  console.log(Error);
	  })

	  this._servicePagoAnexo.getAllAnexos().subscribe(data=>{
		  this.anexos = data;
	  	 console.log(data);
	  }, Error => {
		  console.log(Error);
	  })

	  this._servicePagoAnexo.getAllRegistros().subscribe(data => {
		  this.registros = data;
		  console.log(data);
	  }, Error => {
		  console.log(Error);
	  });


  }

}
