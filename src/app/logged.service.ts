import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedService {

  private logged:boolean;
  private subject: Subject<boolean> =  new Subject<boolean>();

  constructor() { }

  setLogged(logged: boolean){
    this.logged= logged;
    this.subject.next(logged);
  }

  getLogged(): Observable<boolean>{
    return this.subject.asObservable();
  }

}
