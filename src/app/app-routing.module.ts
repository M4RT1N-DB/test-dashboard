import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { SalesComponent } from './pages/reports/sales/sales.component';
import { DiscountComponent } from './pages/exceptions/discount/discount.component';

const routes: Routes = [
  {path:'content',component:ContentComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'report/sales/gross-transactions',component:SalesComponent},
  {path:'report/exceptions/discount', component:DiscountComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/content' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
