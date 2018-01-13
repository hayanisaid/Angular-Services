import {Injectable}      from '@angular/core';
/*iport Http and Response from http*/
import {Http ,Response}  from        '@angular/http';
import {Observable}      from 'rxjs/Observable';
 /*import map operator form rxjs*/
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw"



@Injectable()
export class EmployeeService{
    
    private _url: string = "api.json"
     /*inject the dependency*/
     constructor(private _http:Http){}
	getEmployeeName(){
		return this._http.get(this._url)
		.map((response:Response)=>response.json())
        /*call a metho*/
        .catch(this._errorHandler);
	}
    _errorHandler(error:Response){
      console.error(error)
      // return observable
      return Observable.throw(error || 'Server Error')
    }

	/*return [
    {'id':1,'name':'said','gender':'male'},
    {'id':2,'name':'johon','gender':'male'},
    {'id':3,'name':'ahmed','gender':'male'},
    {'id':4,'name':'karim','gender':'male'},
    {'id':1,'name':'layla','gender':'Female'}
  ]*/
}