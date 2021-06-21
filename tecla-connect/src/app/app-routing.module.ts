import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { EstudiosComponent } from './componentes/registro/estudios/estudios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GuardmainGuard } from './componentes/shared/guardmain.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'registrarse',
    component: RegistroComponent,
    canActivate: [GuardmainGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuardmainGuard]
  },
  {
    path: 'estudios',
    component: EstudiosComponent,
    canActivate: [GuardmainGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
