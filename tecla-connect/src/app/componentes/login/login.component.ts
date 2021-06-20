import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicemainService } from 'src/app/services/servicemain.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public form: FormGroup;
  hide = true;

  constructor(public servicemainService: ServicemainService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }
  async login() {
    if (this.form.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Ingresa las credenciales de acceso',
        text: 'Verifica la información',
      })

    } else {
      const data = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      let resultado = await this.servicemainService.login(data);
      console.log('resultado', resultado)
      sessionStorage.setItem(
        'token',
        JSON.stringify(resultado.token)
      );
      sessionStorage.setItem(
        'userinfo',
        JSON.stringify(resultado.userInfo)
      );
    }

  }


}
