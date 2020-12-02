import { Component, OnInit } from '@angular/core';
// Para el formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    });
  }

  ngOnInit(): void {
    console.log("fsd")
  }

  saveTodo() {
    console.log(this.todoForm.value);
  }
}
