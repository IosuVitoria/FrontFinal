import { NgModule, Component } from '@angular/core';
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
import { NuevaAsignaturaComponent } from './pages/gestion-centro/nueva-asignatura/nueva-asignatura.component';
import { MisionVisionValoresComponent } from './pages/mision-vision-valores/mision-vision-valores.component';
import { authGuard } from './guard/auth.guard';
import { AvisoComponent } from './pages/login/aviso/aviso.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DeporteComponent } from './shared/footer/deporte/deporte.component';
import { ArtesVisualesComponent } from './shared/footer/artes-visuales/artes-visuales.component';
import { ClubCienciasComponent } from './shared/footer/club-ciencias/club-ciencias.component';



const routes: Routes = [ 
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"alumno", component:AlumnoComponent, canActivate:[authGuard]},
  {path:"profesor", component:ProfesorComponent, canActivate:[authGuard]},
  {path:"gestionCentro", component:GestionCentroComponent, canActivate:[authGuard]},
  {path:"nuevoalumno", component:NuevoAlumnoComponent, canActivate:[authGuard]},
  {path:"nuevoprofesor", component:NuevoProfesorComponent, canActivate:[authGuard]},
  {path:"nuevaasignatura", component:NuevaAsignaturaComponent, canActivate:[authGuard]},
  {path:"misionvisionvalores", component:MisionVisionValoresComponent},
  {path:"contact", component:ContactoComponent},
  {path:"login", component:LoginComponent},
  {path:"password", component:PasswordComponent},
  {path:"ciencias", component:ClubCienciasComponent},
  {path:"aviso", component:AvisoComponent},
  {path:"register", component:RegisterComponent, canActivate:[authGuard]},
  {path:"perfilProfesor", component:FormDatosComponent,canActivate:[authGuard]}, 
  {path:"deportes", component:DeporteComponent},
  {path:'noticias', component: NoticiasComponent },
  {path:'galeria', component: GaleriaComponent },
  {path:'artesVisualesYmusica', component: ArtesVisualesComponent},  
  {path:"eventos", component:EventosComponent},
  {path:'**', pathMatch: 'full', component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
