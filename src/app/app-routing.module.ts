import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AddNewComponent } from './component/add-new/add-new.component';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'Emp/:id', component: EmployeeComponent },
  { path: 'add', component: AddNewComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
