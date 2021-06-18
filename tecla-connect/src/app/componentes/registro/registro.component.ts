import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'





@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  selectedFile: File
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
      imagen: new FormControl('', [Validators.required]),

    })
  }
  save(){
    console.log(this.form.value)
    if(this.form.status === 'INVALID'){
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'verifica la información',
      })
    }
    
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log('selected',this.selectedFile)
    const uploadData = new FormData();
    uploadData.append('imagen', this.selectedFile, this.selectedFile.name);
    this.form.value.imagen = uploadData;
  }

  
  

}
