import { Component, OnInit } from '@angular/core';
import { UrlConfigService } from '../url-config.service';
@Component({
  selector: 'app-grafica-consultores',
  templateUrl: './grafica-consultores.component.html',
  styleUrls: ['./grafica-consultores.component.css']
})
export class GraficaConsultoresComponent implements OnInit {

  constructor(private urlConfig:UrlConfigService) { }

  ngOnInit() {
  	window.location.href = this.urlConfig.urlServidorThymeleaf+'graficaConsultor';
  }

}
