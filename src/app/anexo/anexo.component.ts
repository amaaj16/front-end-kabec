/*importa todos los servicios, componentes necesarios para el funcionamiento correcto de este componente*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*MOdelos de los objetos que se utilizan 
para la entrada y salida de datos que reciben las peticiones de los servicios*/
import { Anexo } from '../modelos/anexo';

//Servicio  realiza las peticiones al backen atraves de protocolos http 
import { PagosAnexosService } from '../servicios/pagos-anexos.service';

@Component({
  selector: 'app-anexo',
  templateUrl: './anexo.component.html',
  styleUrls: ['./anexo.component.css']
})
export class AnexoComponent implements OnInit {

	anexos: Anexo[];
  constructor(private _router:Router, private _servicio: PagosAnexosService) { }

  ngOnInit() {

  	this._servicio.getAllAnexos().subscribe(data=>{
			this.anexos = data;
			console.log(data);
  	},Error=>{
  		console.log(Error);
  	})
  	
  }

 

}
