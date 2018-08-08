import { Component, OnInit} from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { UrlConfigService } from '../app/url-config.service';


@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',

})

export class NuevoUsuario implements OnInit {

	constructor(private urlConfig: UrlConfigService) { }

	ngOnInit() {
		window.location.href=this.urlConfig.urlServidorThymeleaf+'altaUsuario';
	}
}
