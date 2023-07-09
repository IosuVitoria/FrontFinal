import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../../../../services/asignaturaService.component';
import { GestionService } from '../../../../services/gestionService.component';

interface Alumno {
  _id: string; // Agrega la propiedad _id con el tipo adecuado
  nombre: string;
  apellidos: string;
  Curso: string;
  tutor1: string;
  tutor2: string;
  tutorCurso: string;
  asignaturas: string[]; // Aquí se almacenarán los ID de las asignaturas
  email: string;
}

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {
  asignaturas: any[] = [];
  alumno: Alumno = {
    _id:"",
    nombre: '',
    apellidos: '',
    Curso: '',
    tutor1: '',
    tutor2: '',
    tutorCurso: '',
    asignaturas: [], // Aquí se almacenarán los ID de las asignaturas
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
    console.log(this.alumno);
    this.gestionService.addAlumno(this.alumno).subscribe(
      (alumno) => {
        console.log('Alumno agregado:', alumno);
      },
      (error) => {
        console.log('Error al agregar el alumno:', error);
      }
    );
  }
}
