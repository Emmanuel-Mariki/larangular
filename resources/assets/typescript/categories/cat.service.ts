import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Category } from './category';

@Injectable()

/**
 * name
 */
export class CatService {

  private headers = new Headers({ 'Content-Type': 'application/jsonp'});

  private TypeUrl = 'http://localhost/larangular/categories';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Observable <Category[]>
  {
    return this.http.get(this.TypeUrl)
                    .map(res=>res.json())
                    .catch(this.ThrowError);

  }

  getCategory(id:number):Observable <Category[]>
  {
    return this.http.get(this.TypeUrl+'/'+id)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  putCategory(id:number,Category):Observable <Category[]>
  {
    let body = JSON.stringify({ Category });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this.TypeUrl+'/'+id, body, options)
                    .map(res=>res.json())
                    .catch(this.ThrowError);
  }

  postCategory(Category):Observable <Category[]>
  {
    let body = JSON.stringify({ Category });
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.TypeUrl, body, options)
               .map(this.ExctractData)
               .catch(this.ThrowError);
  }

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
}