import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { LoggedService } from './logged.service';

@Injectable()
export class AuthenticationService {

  public token:string;

  constructor(private http: Http, private loggedService: LoggedService) { 
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username:string, password:string): Observable<boolean>{
    return this.http.post('/api/authenticate', JSON.stringify({username:username, password:password}))
      .map((response: Response) =>{
        let token= response.json() && response.json().token;
        if (token){
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          this.loggedService.setLogged(true);
          return true;
        }else
        {
          return false;
        }
      });
  }

  logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.loggedService.setLogged(false);
  }

}
