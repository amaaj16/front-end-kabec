import { Component, OnInit} from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { UrlConfigService } from '../url-config.service';


@Component({
  selector: 'app-nuevoconsultor',
	templateUrl: './nuevoconsultor.component.html',


})

export class NuevoConsultor implements OnInit {

	constructor(private urlConfig:UrlConfigService) { }

	ngOnInit() {
		
			window.location.href = this.urlConfig.urlServidorThymeleaf+'nuevoConsultor';
		
	}
}
