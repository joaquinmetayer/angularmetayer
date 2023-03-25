import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  save() {
    if (this.form.valid) {
      const dataFormu = this.form.value;
      console.log(dataFormu);
      // Lógica para enviar los datos del formulario
    }
  }
  
}

