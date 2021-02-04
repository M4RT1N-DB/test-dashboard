import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
class Employees {
  avatar:string='';
  name: string = '';
  contactInfo: string = '';
  clockedIn: string = '';
  clockedOut: string = '';
  breakTime: number = 0;
  HoursWorked = {
    hours: 0,
    min: 0,
  };
  status={
    status:'',
    Color:'#fff',
  };
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
    {avatar:'s',name:'Manuel',contactInfo:'Cupidatat aliqua id irure@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Active',Color:'#34b484'}},
    {avatar:'n',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Deleted',Color:'#e32424'}},
    {avatar:'s',name:'Manuel',contactInfo:'test@gmail.com',clockedIn:'10:22 AM',clockedOut:'04:12 PM',breakTime:22,HoursWorked:{hours:6,min:22},status:{status:'Unverified',Color:'#efb112'}},  
  ];
  constructor() {}

  ngOnInit(): void {}
  onChange(result: Date): void {
    console.log('onChange: ', result);
    console.log(this.date);
  }
}
