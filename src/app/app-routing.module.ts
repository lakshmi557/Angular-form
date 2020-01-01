import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';


const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
