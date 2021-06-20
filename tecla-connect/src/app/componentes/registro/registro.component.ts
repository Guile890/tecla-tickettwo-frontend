import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicemainService } from 'src/app/services/servicemain.service';
import Swal from 'sweetalert2'





@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  selectedFile: File
  public form: FormGroup;

  constructor(public servicemainService: ServicemainService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      nacimiento: new FormControl('', [Validators.required]),
      linkedin: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      // conocimiento: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),

    })
  }
  async save() {
    console.log(this.form)
    if (this.form.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'verifica la información',
      })

    } else {
      const data = {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        email: this.form.value.email,
        password: this.form.value.password,
        imagen:this.form.value.imagen,
        pais:this.form.value.pais,
        ciudad:this.form.value.ciudad,
        nacimiento:this.form.value.nacimiento,
        linkedin: this.form.value.linkedin,
        hobbies: this.form.value.hobbies,
        conocimientos: this.form.value.conocimientos,
      }
      let resultado = await this.servicemainService.main(data)
      console.log('resultado',resultado)
    }

  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log('selected', this.selectedFile)
    const uploadData = new FormData();
    uploadData.append('imagen', this.selectedFile, this.selectedFile.name);
    console.log('upload',uploadData)
    this.form.value.imagen = uploadData;
  }




}
