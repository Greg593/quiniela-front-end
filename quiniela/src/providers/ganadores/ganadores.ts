import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GanadoresProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getGanadores(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/ganadores')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
  
}
