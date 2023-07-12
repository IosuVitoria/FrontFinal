import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumnoService.component';
import { Alumno } from '../../models/alumno.model';
import { Asignatura } from 'src/app/models/asignatura.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  
  alumno?: Alumno;
  alumnoId: string | null = null;
  asignaturas: any[] = [];
  console = console;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    const entidadData = sessionStorage.getItem('entidad');
    // console.log(entidadData);

    if (entidadData) {
      const entidad = JSON.parse(entidadData);
      // console.log(entidad);

      this.alumnoId = entidad._id;
      // console.log("Esto es el ID");
      // console.log(this.alumnoId);
      this.alumno = entidad;

      if (this.alumno && this.alumno.asignaturas) {
        const asignaturaIds = this.alumno.asignaturas;
        // console.log(asignaturaIds);
        for (const asignaturaId of asignaturaIds) {
          // console.log(asignaturaId);
          this.alumnoService.getAsignaturaById(asignaturaId).subscribe(
            (asignatura: any) => {
              console.log(asignatura);
              console.log(asignatura[0].nombre);
              this.asignaturas.push(asignatura);
              // console.log(this.asignaturas)
            },
            (error: any) => {
              console.error(error);
            }
          );
        }
      }
    }
  }
}
