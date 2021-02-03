import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  {path:'content',component:ContentComponent},
  {path:'employees',component:EmployeesComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/content' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
