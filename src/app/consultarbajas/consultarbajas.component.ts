import { Component, OnInit} from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { UrlConfigService } from '../url-config.service';


@Component({
  selector: 'app-consultarbajas',
	templateUrl: './consultarbajas.component.html',

})

export class ConsultarBajas implements OnInit {

	constructor(private urlConfig:UrlConfigService) { }

	ngOnInit() {
		window.location.href = this.urlConfig.urlServidorThymeleaf+'consultarBajas';
	}
}
