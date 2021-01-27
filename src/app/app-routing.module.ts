import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path:'content',component:ContentComponent},
  {path:'test',component:TestComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/content' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
