import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../../services/alumnoService.component';
import { Alumno } from '../../../models/alumno.model';
import { Nota } from '../../../models/nota.models';
import { Asignatura } from '../../../models/asignatura.model';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  alumno?: Alumno;
  alumnoId: string | null = null;
  notas: Nota[] = [];
  asignaturas: Asignatura[] = [];
  console = console;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    const entidadData = sessionStorage.getItem('entidad');
    if (entidadData) {
      const entidad = JSON.parse(entidadData);
      this.alumnoId = entidad._id;
      console
      console.log(this.alumnoId);
      this.alumno = entidad;

      if (this.alumno && this.alumnoId) {
        this.alumnoService.getNotasByAlumnoId(entidad._id).subscribe(
          (notas: any[]) => {
            this.notas = notas;
            console.log(notas);
            console.log(notas[0]);
            console.log(notas[0].asignatura);
            console.log(notas[0].asignatura[0].nombre);
          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    }
  }
}


