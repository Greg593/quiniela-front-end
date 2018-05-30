import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TablaProvider {

  data: any [] = [];

  constructor(public http: Http) {
    this.data = null;
  }

  getTabla(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.A;
          resolve(this.data);
        });
    });
  }

}
