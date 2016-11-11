import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toArray';



import { PropertyTypes } from './type';

@Injectable()

export class TypeService {

  private headers = new Headers({ 'Content-Type': 'application/jsonp'});

  private TypeUrl = 'http://localhost/larangular/types';  // URL to web api

  constructor(private http: Http) { }

  private ThrowError (error: any) 
  {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }

  private ExctractData(res:Response)
  {
    let body    = res.json();
    return body.data || {};
  }

  getPropTypes(): Observable <PropertyTypes[]>
  {
    return this.http.get(this.TypeUrl)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }

  getPropType(id:number):Observable <PropertyTypes[]>
  {
    return this.http.get(this.TypeUrl+'/'+id)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  putPropType(id:number,PropertyTypes):Observable <PropertyTypes[]>
  {
    let body = JSON.stringify({ PropertyTypes });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this.TypeUrl+'/'+id, body, options)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  postPropType(PropertyTypes):Observable <PropertyTypes[]>
  {
    let body = JSON.stringify({ PropertyTypes });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.TypeUrl, body, options)
                    .map(this.ExctractData)
                    .catch(this.ThrowError);

  }

}