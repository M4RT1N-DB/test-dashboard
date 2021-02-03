import { Component, OnInit } from '@angular/core';
class Employees {
  name: string = '';
 /*  avatar: string = this.nombre?.charAt(0); */

  contactInfo: string = '';
  clockedIn: string = '';
  clockedOut: string = '';
  breakTime: number = 0;
  HoursWorked = {
    hours: 0,
    min: 0,
  };
  status: string = 'Active';
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  data = [
    { title: 'Net Sales', cant: 17 },
    { title: 'Counts', cant: 2 },
    { title: 'Discounts', cant: 0 },
    { title: 'Taxes', cant: 1.62 },
    { title: 'Gross Sales', cant: 17 },
  ];
  date = null;
  selectedValue = null;
  demoValue: number = 10;
  employeesList: Employees[] = [
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},
    {name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:'Active'},  
  ];
  constructor() {}

  ngOnInit(): void {}
  onChange(result: Date): void {
    console.log('onChange: ', result);
    console.log(this.date);
  }
}
