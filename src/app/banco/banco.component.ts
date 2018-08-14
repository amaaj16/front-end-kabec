import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Banco } from '../modelos/banco.model';
import { BancoService } from './banco.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  bancos : Banco[];

  constructor(private router: Router, private bancoService: BancoService) {

  }

  ngOnInit() {
 this.bancoService.getBanco().subscribe( data => {
        console.log(data);
        this.bancos = data;
      });
  };


  deleteBanco(banco: Banco) {
      this.bancoService.deleteBanco(banco)
        .subscribe( data => {

          this.bancos = this.bancos.filter(u => u !== banco);
        },Error=>console.log(Error))
    };

  }
