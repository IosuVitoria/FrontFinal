import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { GestionCentroComponent } from './pages/gestion-centro/gestion-centro.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotasComponent } from './pages/alumno/notas/notas.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { CardComponent } from './pages/home/card/card.component';
import { ActividadesCulturalesComponent } from './pages/actividades-culturales/actividades-culturales.component';
import { CalendarioComponent } from './pages/alumno/calendario/calendario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PasswordComponent } from './pages/login/password/password.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    AlumnoComponent,
    ProfesorComponent,
    GestionCentroComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    NotasComponent,
    SliderComponent,
    CardComponent,
    ActividadesCulturalesComponent,
    CalendarioComponent,
    PasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
