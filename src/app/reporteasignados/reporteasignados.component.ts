import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AsignacionService} from '../servicios/asignacion.service';
import {Persona} from '../modelos/persona';
import {PagosAnexosService} from '../servicios/pagos-anexos.service';
import {RegistroAsignacion} from '../modelos/registro-asignacion';
import { LayoutService } from 'angular-admin-lte';
@Component({
  selector: 'app-reporteasignados',
  templateUrl: './reporteasignados.component.html',
  styleUrls: ['./reporteasignados.component.css']
})
export class ReporteasignadosComponent implements OnInit {

	registrosAsignados: RegistroAsignacion[];
  constructor(private _router:Router,private _servicio:AsignacionService, private _servicioasig:PagosAnexosService) { }

  ngOnInit() {
	 
	  this._servicio.getAsignados().subscribe(data1=>{
		  this.registrosAsignados = data1;
		  console.log(data1);
	  },Error=>{
	  	console.log(Error);
	  })

	  

  }

}
