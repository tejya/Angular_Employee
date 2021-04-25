import { Component, OnInit } from '@angular/core';
import{EmployeeServiceService,Employee} from '../employee-service.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  p:number=1;
employee:Employee[];
  constructor(private employeeClientService:EmployeeServiceService) { }

  ngOnInit() {
    this.employeeClientService.getEmployees().subscribe(
     response =>{this.employee = response;
      response.forEach(function (value) {
        console.log(value);
    });
    }
    );
  }
  deleteEmployee(employee: Employee): void {
    this.employeeClientService.deleteEmployee(employee)
      .subscribe( data => {
        this.employee = this.employee.filter(u => u !== employee);
      })
  };
}


