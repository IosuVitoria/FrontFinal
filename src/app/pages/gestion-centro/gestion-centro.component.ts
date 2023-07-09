import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../../services/gestionService.component';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './gestion-centro.component.html',
  styleUrls: ['./gestion-centro.component.css']
})
export class GestionCentroComponent implements OnInit {
  alumnos: Alumno[] = [];
  alumnosFiltrados: Alumno[] = [];
  alumno: Alumno | undefined;
  alumnoEnEdicion: Alumno | null = null;
  alumnoId!: string | null;
  currentPage: number = 1;
  pageSize: number = 5;
  filtroNombre: string = '';

  constructor(private alumnoService: GestionService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
        this.filtrarAlumnos();
        console.log(alumnos)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getAlumno(id: string): void {
    this.alumnoService.getAlumno(id).subscribe(
      (alumno: Alumno) => {
        this.alumno = alumno;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addAlumno(alumno: Alumno): void {
    this.alumnoService.addAlumno(alumno).subscribe(
      (newAlumno: Alumno) => {
        this.alumnos.push(newAlumno);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateAlumno(alumno: Alumno): void {
    this.alumnoService.updateAlumno(alumno).subscribe(
      (updatedAlumno: Alumno) => {
        const index = this.alumnos.findIndex(a => a._id === updatedAlumno._id);
        if (index !== -1) {
          this.alumnos[index] = updatedAlumno;
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteAlumno(id: string): void {
    this.alumnoService.deleteAlumno(id).subscribe(
      () => {
        this.alumnos = this.alumnos.filter(a => a._id !== id);
        this.filtrarAlumnos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  filtrarAlumnos(): void {
    this.alumnosFiltrados = this.alumnos.filter(alumno =>
      alumno.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
    this.currentPage = 1;
  }

  confirmarEliminacion(alumno: Alumno): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${alumno.nombre}?`);
    if (confirmacion) {
      this.deleteAlumno(alumno._id);
    }
  }

  iniciarEdicion(alumno: Alumno): void {
    this.alumnoEnEdicion = { ...alumno };
  }
  
  confirmarActualizacion(): void {
    const confirmacion = confirm(`¿Estás seguro de actualizar los datos del alumno?`);
    if (confirmacion && this.alumnoEnEdicion) {
      this.updateAlumno(this.alumnoEnEdicion);
      this.alumnoEnEdicion = null;
    }
  }
}
