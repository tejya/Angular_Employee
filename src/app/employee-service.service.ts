import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Employee{
  constructor(
    public emplId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
  }

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  
  getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.emplId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }
}
