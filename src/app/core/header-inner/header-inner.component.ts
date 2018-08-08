import { Component,OnInit } from '@angular/core';
import {LoginService} from '../../servicios/login.service';
import {User} from '../../models/user.model';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent implements OnInit  {
    public user: User;
    constructor(private _getUser:LoginService) { }
    ngOnInit() {

      this._getUser.getUser().subscribe(data=>{
          this.user=data;
          console.log(data);
      }, Error=>{
        console.log(Error);
      })
    }
  
}
