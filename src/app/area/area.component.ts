import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Area} from '../modelos/area';
import {ServicioAreaService} from '../servicios/servicio-area.service';
import {ClienteService} from '../servicios/cliente.service';
import {Cliente} from '../modelos/cliente';



@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public areas: Area[];
  public clientes:Cliente[];

  constructor(private _router: Router, private _areaService:ServicioAreaService, private _clienteService:ClienteService) { }


  ngOnInit() {

  	this._areaService.getAll().subscribe( 
  		result=>{
  			if (result.code!="200"){
  				console.log(result);

				this.areas = result;
  			}else{
					this.areas = result.data;
  			}
  		},
  		Error=>{
  			console.log(<any>Error);
  		});

    this._clienteService.getAllClientes().subscribe(
      data=>{
        this.clientes=data;
        console.log(data);

      },Error=> console.log(Error));
  }

  deleteArea(area:Area): void{
    this._areaService.deleteArea(area)
    .subscribe ( data=>{
      this.areas = this.areas.filter(u => u != area);
      alert("Area Eliminada");
      },Error=>{
        alert("No se puede eliminar el Area:"+area+" debido a que esta siendo usada.")
      })

  };

 
}
