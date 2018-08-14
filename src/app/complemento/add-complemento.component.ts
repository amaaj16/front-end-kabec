import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Complemento } from '../modelos/complemento.model';
import { ComplementoService } from './complemento.service';

@Component({
  templateUrl: './add-complemento.component.html',
  styleUrls: ['./complemento.component.css']
})

export class AddComplementoComponent {

  complemento: Complemento=new Complemento();

  constructor(private router: Router, private complementoService: ComplementoService) {

  }

  createComplemento()  {
      this.complementoService.createComplemento(this.complemento)
        .subscribe( data => {
          alert("Complemento creado con exito");
        },Error=>console.log(Error));
    };

  }
