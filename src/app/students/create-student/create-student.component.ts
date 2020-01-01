import { Student } from './../../models/student.model';
import { Component, OnInit } from "@angular/core";
import { Department } from 'src/app/models/department.model';

@Component({
  selector: "app-create-student",
  templateUrl: "./create-student.component.html",
  styleUrls: ["./create-student.component.css"]
})
export class CreateStudentComponent implements OnInit {
  // To make default check box (use checked key or assign value to property)
  // gender = "male";

  // To make default select option (use selected key or assign value to property)
  // department = "1";

  photoPreview = false;

  student: Student = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    photoPath: null,
  }

  departments: Department[] = [
    { id: 1, name: "CSE"},
    { id: 2, name: "IT"},
    { id: 3, name: "ECE"},
    { id: 4, name: "EEE"},
    { id: 5, name: "Mech"},
  ]
  constructor() {}

  ngOnInit() {}
  // saveStudent(stuform) {
  //   console.log("form values", stuform.value);
  // }
  saveStudent(newstudent) {
    console.log("form values", newstudent);
  }

  togglePhotoPreview(){
    this.photoPreview = !this.photoPreview;
  }
}
