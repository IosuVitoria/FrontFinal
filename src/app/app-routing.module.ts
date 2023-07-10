import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { GestionCentroComponent } from './pages/gestion-centro/gestion-centro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NuevoAlumnoComponent } from './pages/gestion-centro/nuevo-alumno/nuevo-alumno.component';
import { NuevoProfesorComponent } from './pages/gestion-centro/nuevo-profesor/nuevo-profesor.component';
import { PasswordComponent } from './pages/login/password/password.component';
import { FormDatosComponent } from './pages/profesor/card-perfil/form-datos/form-datos.component';


const routes: Routes = [ 
  
  {path:"home", component:HomeComponent},
  {path:"alumno", component:AlumnoComponent},
  {path:"profesor", component:ProfesorComponent},
  {path:"gestionCentro", component:GestionCentroComponent},
  {path:"nuevoalumno", component:NuevoAlumnoComponent},
  {path:"nuevoprofesor", component:NuevoProfesorComponent},
  {path:"contact", component:ContactoComponent},
  {path:"login", component:LoginComponent},
  {path:"password", component:PasswordComponent},
  {path:"register", component:RegisterComponent},
  {path:"perfilProfesor", component:FormDatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
