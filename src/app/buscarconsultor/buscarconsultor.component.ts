import { Component, OnInit} from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { UrlConfigService } from '../url-config.service';


@Component({
  selector: 'app-buscarconsultor',
	templateUrl: './buscarconsultor.component.html',

})

export class BuscarConsultor implements OnInit {

	constructor(private urlConfig:UrlConfigService) { }

	ngOnInit() {
		window.location.href = this.urlConfig.urlServidorThymeleaf+'buscarConsultor';
	}
}
