import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TablaProvider {

  data: any [] = [];

  constructor(public http: Http) {
    this.data = null;
  }

  getTablaA(){
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

  getTablaB(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.B;
          resolve(this.data);
        });
    });
  }

  getTablaC(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.C;
          resolve(this.data);
        });
    });
  }

  getTablaD(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.D;
          resolve(this.data);
        });
    });
  }

  getTablaE(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.E;
          resolve(this.data);
        });
    });
  }

  getTablaF(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.F;
          resolve(this.data);
        });
    });
  }

  getTablaG(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.G;
          resolve(this.data);
        });
    });
  }

  getTablaH(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8100/tabla')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.standings.H;
          resolve(this.data);
        });
    });
  }

}
