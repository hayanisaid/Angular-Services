import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee=[];
  constructor(private _Detail:EmployeeService) { }

  ngOnInit() {
   // this.employee=this._Detail.getEmployeeName();
   /*get the data from json file*/

   this._Detail.getEmployeeName().
   subscribe(responData=>this.employee=responData);
  }

}
