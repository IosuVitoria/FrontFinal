import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ProfesorServiceService } from 'src/services/profesor-service.service';


@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent {
  datos!: any;
  // id!: number;
  id: any = "64a7028b0e6ea120aa93da07";
  console=console
  constructor(
    private servicio: ProfesorServiceService, 
    private router: Router, 
    private authApi: AuthService,
    
     ) {}
  
  user = JSON.parse(String(sessionStorage.getItem('entidad')))  

  ngOnInit(): void {
    this.servicio.getProfesor(this.user._id).subscribe((data: any) => {
      this.datos = data;
      console.log(this.user._id);
      console.log(this.datos);
    });  
  }

  modifyDatos(datos: any) {
    this.servicio.modifyDatos(datos);
    this.router.navigate(["perfilProfesor"]);
  }
}