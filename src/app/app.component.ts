import { Component, OnInit} from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
	public customLayout: boolean;
	constructor(private layoutService: LayoutService, private http:HttpClient) {
	 }


	ngOnInit() {
		this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });

	}
}
