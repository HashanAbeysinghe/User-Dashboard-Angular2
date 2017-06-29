import { Component } from '@angular/core';

import { LoggedService } from './logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Messenger';
  public navigationBar = true;

  constructor(private loggedService: LoggedService){
    this.loggedService.getLogged().subscribe((logged:boolean)=>{
        this.navigationBar= logged;
        console.log(logged);
        
    });
  }




  
}
