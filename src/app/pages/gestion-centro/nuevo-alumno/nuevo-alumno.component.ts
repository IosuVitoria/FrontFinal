import { Component } from '@angular/core';
import { GestionService } from '../../../../services/gestionService.component';
import { Alumno } from '../../../models/alumno.model';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent {
  nuevoAlumno: Alumno = {
    nombre: '',
    apellidos: '',
    Curso: '',
    tutor1: '',
    tutor2: ''
  };

  constructor(private alumnoService: GestionService) {}

  agregarAlumno(): void {
    this.alumnoService.addAlumno(this.nuevoAlumno).subscribe(
      (alumno: Alumno) => {
        console.log('Alumno agregado:', alumno);
     
      },
      (error: any) => {
        console.error('Error al agregar el alumno:', error);
      }
    );
  }
}
