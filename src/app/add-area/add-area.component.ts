/*importa todos los servicios, componentes necesarios para el funcionamiento correcto de este componente*/
import { Component, OnInit } from '@angular/core';

//Servicio  realiza las peticiones al backen atraves de protocolos http 
import {ServicioAreaService} from '../servicios/servicio-area.service';
import { ClienteService } from '../servicios/cliente.service';
/*MOdelos de los objetos que se utilizan 
para la entrada y salida de datos que reciben las peticiones de los servicios*/
import {Area} from '../modelos/area';
import { Cliente } from '../modelos/cliente';

import {Router} from '@angular/router';
//libreria form necesaria cuando se trabaja con formularios
import {Form} from '@angular/forms';

import { LayoutService } from 'angular-admin-lte';
import {Token} from '../modelos/token';
@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {
	// inicializa los objetos o servicios para poder ser llamados en la clase
	constructor(private _router: Router,private _areaServicio: ServicioAreaService, private _clienteService: ClienteService) { }
  //se instacia un nuevo objeto area para el formulario utilizado en el componente.html
  public area= new Area();

  //se declara un objeto cliente 
  public clientes: Cliente[];
  //se declara un objeto Token 
  public token: Token;


  ngOnInit() {

    /*se hace una peticion a cliente service para obtener todos los clietes 
    que se mostraran en el componente options en el formulario */
    this._clienteService.getAllClientes().subscribe(
      data => {
        this.clientes = data;
      },
      Error => {
        console.log(Error);
      });
    //obtiene el token de la sesion actual para insertarla en las peticiones post
    this._areaServicio.getToken().subscribe(
      data=>{
        this.token=data;
      })
  }

  //metodos que recoje los datos insertados en el formulario y envia al backend
  createArea() {
  	this._areaServicio.createArea(this.area, this.token).subscribe(data=>{
      alert("Se Créo Area");

  	},
  	error=>{
  		console.log(error);
  	})
	};


}
 	