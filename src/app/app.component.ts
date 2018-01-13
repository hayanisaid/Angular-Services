import { Component ,OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  template: `<div>
              
              <h2>Employee List</h2>
              <ul *ngFor="let item of employee">
               <li >
               {{item.name}}
               </li>
              </ul>
            </div>
           <app-employee-detail></app-employee-detail>
            `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employee=[];

  constructor(private _Employee:EmployeeService){}

  ngOnInit(){
  	this.employee=this._Employee.getEmployeeName();
  }
}
