import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

	urlConfig = 'http://192.168.0.10:8082/';
	urlServidorThymeleaf='http://192.168.10:8082/Kabec/';
}
