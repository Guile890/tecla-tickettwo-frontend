import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre:  new FormControl('', [Validators.required]),
      apellidos:  new FormControl('', [Validators.required]),
      email:  new FormControl('', [Validators.required]),
      password:  new FormControl('', [Validators.required]),
      pais:  new FormControl('', [Validators.required]),
      ciudad:  new FormControl('', [Validators.required]),
      nacimiento :  new FormControl('', [Validators.required]),
      linkedin:  new FormControl('', [Validators.required]),
      hobbies:  new FormControl('', [Validators.required]),
      conocimientos:  new FormControl('', [Validators.required]),

    })
  }
  save(){

  }
  cancelar(){

  }

}
