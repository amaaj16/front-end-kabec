import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { UrlConfigService } from '../url-config.service';


@Component({
	selector: 'app-consultarusuario',
	templateUrl: './consultarusuario.component.html',

})

export class ConsultarUsuario implements OnInit {

	constructor(private urlConfig:UrlConfigService) { }

	ngOnInit() {

		window.location.href = this.urlConfig.urlServidorThymeleaf+'consultarUsuario';

	}
}
