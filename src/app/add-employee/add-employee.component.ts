import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService,Employee} from '../employee-service.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
user:Employee =new Employee("","","","")
  constructor(private employeeservice:EmployeeServiceService) { 
  }

  ngOnInit(): void {
  }
  createEmployee(): void {
    this.employeeservice.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };
}
