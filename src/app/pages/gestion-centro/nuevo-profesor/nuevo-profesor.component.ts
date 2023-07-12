import { Component } from '@angular/core';
import { GestionService } from '../../../../services/gestionService.component';
import { ProfesorCreate } from '../../../models/profesor.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-profesor',
  templateUrl: './nuevo-profesor.component.html',
  styleUrls: ['./nuevo-profesor.component.css']
})
export class NuevoProfesorComponent {
  role?:string;
  user:any;
  profesor: ProfesorCreate = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  }

  constructor(private gestionService: GestionService, private router: Router) { }


  ngOnInit():void{
    const userData = sessionStorage.getItem('user');
    this.user = JSON.parse(String(userData));
    this.role=this.user.role;
    if (this.role !== "admin"){
      Swal.fire({
        title: "Colegio El Huargo",
        text: "Para poder acceder es necesario ser profesor",
        width: "50%",
        
        position:"center",
        color:"#000000"
    
    
      });
      this.router.navigate(['/home']);
    }

}

  agregarProfesor(): void {
    this.gestionService.addProfesor(this.profesor).subscribe(
      (newProfesor: ProfesorCreate) => {
        console.log('Profesor agregado:', newProfesor);
        
      },
      (error: any) => {
        console.error('Error al agregar profesor:', error);
      }
    );
  }


}
