import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students = [
    { name: 'Juan', evaluated: true },
    { name: 'María', evaluated: false },
    { name: 'Pedro', evaluated: true },
    { name: 'Luisa', evaluated: false },
  ];
}
