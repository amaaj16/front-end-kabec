import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Nomina } from '../modelos/nomina.model';
import { NominaService } from './nomina.service';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})

export class NominaComponent implements OnInit {

 nominas:Nomina[];

  constructor(private router:Router, private nominaService: NominaService) { }

  ngOnInit() {
    this.nominaService.getNomina()
      .subscribe( data => {
        this.nominas = data;
        console.log(data);
      },Error=>console.log(Error));
    };

    deleteNomina(nomina: Nomina): void {
      this.nominaService.deleteNomina(nomina)
        .subscribe( data => {
          this.nominas = this.nominas.filter(u => u !== nomina);
        })
    };

  }
