import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { FormsModule }  from '@angular/forms';

const appRoutes: Routes = [
  {path: 'list', component: ListStudentsComponent},
  {path: 'create', component: CreateStudentComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
