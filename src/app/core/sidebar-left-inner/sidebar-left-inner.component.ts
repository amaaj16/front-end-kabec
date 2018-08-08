import { Component,OnInit} from '@angular/core';
import {LoginService} from '../../servicios/login.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent implements OnInit  {
    public user:User;
    constructor(private _getUser:LoginService) { }
    ngOnInit() {

      this._getUser.getUser().subscribe(data=>{
          this.user=data;
      })
    }
}
