import { Component } from '@angular/core';
import { GestionService } from '../../../../services/gestionService.component';
import { ProfesorCreate } from '../../../models/profesor.model';

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
  };

  constructor(private gestionService: GestionService) { }

  agregarProfesor(): void {
    this.gestionService.addProfesor(this.profesor).subscribe(
      (newProfesor: ProfesorCreate) => {
        console.log('Profesor agregado:', newProfesor);
        // Aquí puedes realizar cualquier acción necesaria después de agregar el profesor, como redirigir a la lista de profesores.
      },
      (error: any) => {
        console.error('Error al agregar profesor:', error);
      }
    );
  }


}
