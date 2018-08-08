import { Component, OnInit} from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import {IniSessionSreviceService} from '../servicios/ini-session-srevice.service';
import { UrlConfigService } from '../url-config.service';


@Component({
  selector: 'app-nuevoconsultor',
	templateUrl: './nuevoconsultor.component.html',


})

export class NuevoConsultor implements OnInit {

	constructor(private urlConfig:UrlConfigService) { }

	ngOnInit() {
		
			//this.router.navigate(['http://192.168.0.10:8082/Kabec/nuevoConsultor']);
			window.location.href = this.urlConfig.urlServidorThymeleaf+'nuevoConsultor';
		
	}
}
