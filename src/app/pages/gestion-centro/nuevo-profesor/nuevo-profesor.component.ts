import { Component } from '@angular/core';
import { GestionService } from '../../../../services/gestionService.component';
import { ProfesorCreate } from '../../../models/profesor.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-profesor',
  templateUrl: './nuevo-profesor.component.html',
  styleUrls: ['./nuevo-profesor.component.css']
})
export class NuevoProfesorComponent {

  profesor: ProfesorCreate = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  }

  constructor(private gestionService: GestionService, private router: Router) { }

  agregarProfesor(): void {
    this.gestionService.addProfesor(this.profesor).subscribe(
      (newProfesor: ProfesorCreate) => {
        console.log('Profesor agregado:', newProfesor);
        this.router.navigate(['/gestionCentro']);
        
      },
      (error: any) => {
        console.error('Error al agregar profesor:', error);
      }
    );
  }


}
