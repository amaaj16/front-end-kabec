import { Component, OnInit } from '@angular/core';
import {Perfil} from '../modelos/perfil'
import {PerfilserviceService} from '../servicios/perfilservice.service'
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	perfiles: Perfil[];
  constructor(private _perfilService: PerfilserviceService) { }

  ngOnInit() {

  	this._perfilService.getPerfiles().subscribe(data=>{
  		this.perfiles=data;
  	})

  }

  deletePerfil(area:Area){
  	this._perfilService.deletePerfil(area).subscribe(data=>{
  		this.perfiles= this.perfiles.filter(u=> u != perfiles);
  		 alert("Area Eliminada Exitosamente");
  	})
  }

}
