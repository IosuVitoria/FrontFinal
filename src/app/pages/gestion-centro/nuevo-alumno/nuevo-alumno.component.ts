import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../../../../services/asignaturaService.component';
import { GestionService } from '../../../../services/gestionService.component';
import { AlumnoCreate } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {
  asignaturas: any[] = [];
  alumno: AlumnoCreate = {
    nombre: '',
    apellidos: '',
    Curso: '',
    tutor1: '',
    tutor2: '',
    tutorCurso: '',
    asignaturas: [], 
    email: ''
  };

  constructor(
    private asignaturaService: AsignaturaService,
    private gestionService: GestionService
  ) {}

  ngOnInit(): void {
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturaService.getAsignaturas().subscribe(
      (asignaturas) => {
        this.asignaturas = asignaturas;
        this.alumno.asignaturas = asignaturas.map((asignatura) => asignatura._id);
      },
      (error) => {
        console.log('Error al obtener las asignaturas:', error);
      }
    );
  }

  agregarAlumno(): void {
    this.gestionService.addAlumno(this.alumno).subscribe(
      (newAlumno: AlumnoCreate) => {
        console.log('Alumno agregado:', newAlumno);
      },
      (error: any) => {
        console.error('Error al agregar profesor:', error);
      }
    );
  }
}
