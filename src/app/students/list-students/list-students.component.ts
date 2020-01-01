import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: Student[] =[
    {id: 557,
      name: "Lakshmi",
      gender: 'Male',
      email: "Lakshmi@gmail.com",
      phoneNumber: "9059894957",
      contactPreference: "phone",
      dateOfBirth: new Date('07/01/1994'),
      department: "CSE",
      photoPath: "/assets/images/kln.jpg"
    },
    {id: 510,
      name: "Sai",
      gender: 'Male',
      email: "sai@gmail.com",
      phoneNumber: "9059894957",
      contactPreference: "phone",
      dateOfBirth: new Date('07/01/1994'),
      department: "CSE",
      photoPath:"/assets/images/Sai.jpg"
    },
    {id: 555,
      name: "Adithya",
      gender: 'Male',
      email: "adithya@gmail.com",
      phoneNumber: "9059894957",
      contactPreference: "phone",
      dateOfBirth: new Date('12/15/1994'),
      department: "CSE",
      photoPath:"/assets/images/Adithya.jpg"
    },
    {id: 510,
      name: "bhavana",
      gender: 'female',
      email: "bhavana@gmail.com",
      phoneNumber: "9059894957",
      contactPreference: "phone",
      dateOfBirth: new Date('09/20/1994'),
      department: "CSE",
      photoPath:"../assets/images/bhavana.jpg"
    },
    {id: 538,
      name: "soumya",
      gender: 'female',
      email: "soumya@gmail.com",
      phoneNumber: "9059894957",
      contactPreference: "phone",
      dateOfBirth: new Date('10/20/1994'),
      department: "CSE",
      photoPath:"assets/images/soumya.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
