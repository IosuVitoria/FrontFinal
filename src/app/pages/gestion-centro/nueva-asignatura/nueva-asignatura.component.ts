import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../../../services/gestionService.component';
import { Asignatura } from '../../../models/asignatura.model';
import { Profesor } from '../../../models/profesor.model';

@Component({
  selector: 'app-nueva-asignatura',
  templateUrl: './nueva-asignatura.component.html',
  styleUrls: ['./nueva-asignatura.component.css']
})
export class NuevaAsignaturaComponent implements OnInit {
  asignatura: Asignatura = {
    nombre: '',
    profesor: ''
  };
  profesores: Profesor[] = [];

  constructor(private gestionService: GestionService) { }

  ngOnInit(): void {
    this.getProfesores();
  }

  getProfesores(): void {
    this.gestionService.getProfesores().subscribe(
      (profesores: Profesor[]) => {
        this.profesores = profesores;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  guardarAsignatura(): void {
    if (this.asignatura.nombre && this.asignatura.profesor) {
      this.gestionService.addAsignatura(this.asignatura).subscribe(
        (newAsignatura: Asignatura) => {
          console.log('Asignatura creada:', newAsignatura);
          // Aquí puedes realizar cualquier acción adicional después de guardar la asignatura
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else {
      console.error('Error: Debes completar todos los campos');
    }
  }
}
