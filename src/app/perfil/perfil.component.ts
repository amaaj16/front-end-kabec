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
      console.log(data);
  		this.perfiles=data;
  	})

  }

  deletePerfil(perfil:Perfil){
  	this._perfilService.deletePerfil(perfil).subscribe(data=>{
  		this.perfiles= this.perfiles.filter(u=> u != perfil);
  		 alert("Perfil Eliminado Exitosamente");
  	})
  }

}
