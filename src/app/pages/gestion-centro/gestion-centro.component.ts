import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../../services/gestionService.component';
import { Alumno } from '../../models/alumno.model';
import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './gestion-centro.component.html',
  styleUrls: ['./gestion-centro.component.css']
})
export class GestionCentroComponent implements OnInit {
  alumnos: Alumno[] = [];
  profesores: Profesor[] = [];
  alumnosFiltrados: Alumno[] = [];
  profesoresFiltrados: Profesor[] = [];
  alumno: Alumno | undefined;
  profesor: Profesor | undefined;
  alumnoEnEdicion: Alumno | null = null;
  profesorEnEdicion: Profesor | null = null;
  alumnoId!: string | null;
  profesorId!: string | null;
  currentPage: number = 1;
  pageSize: number = 5;
  filtroNombre: string = '';

  constructor(private gestionService: GestionService) { }

  ngOnInit(): void {
    this.getAlumnos();
    this.getProfesores();
  }

  getAlumnos(): void {
    this.gestionService.getAlumnos().subscribe(
      (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
        this.filtrarAlumnos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getProfesores(): void {
    this.gestionService.getProfesores().subscribe(
      (profesores: Profesor[]) => {
        this.profesores = profesores;
        this.filtrarProfesores();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addAlumno(alumno: Alumno): void {
    this.gestionService.addAlumno(alumno).subscribe(
      (newAlumno: Alumno) => {
        this.alumnos.push(newAlumno);
        this.filtrarAlumnos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addProfesor(profesor: Profesor): void {
    this.gestionService.addProfesor(profesor).subscribe(
      (newProfesor: Profesor) => {
        this.profesores.push(newProfesor);
        this.filtrarProfesores();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateAlumno(alumno: Alumno): void {
    this.gestionService.updateAlumno(alumno).subscribe(
      (updatedAlumno: Alumno) => {
        const index = this.alumnos.findIndex(a => a._id === updatedAlumno._id);
        if (index !== -1) {
          this.alumnos[index] = updatedAlumno;
          this.filtrarAlumnos();
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateProfesor(profesor: Profesor): void{
    this.gestionService.updateProfesor(profesor).subscribe(
      (updatedProfesor: Profesor) => {
        const index = this.profesores.findIndex(p => p._id === updatedProfesor._id);
        if (index !== -1) {
          this.profesores[index] = updatedProfesor;
          this.filtrarProfesores();
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
   }

  deleteAlumno(id: string): void {
    this.gestionService.deleteAlumno(id).subscribe(
      () => {
        this.alumnos = this.alumnos.filter(a => a._id !== id);
        this.filtrarAlumnos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteProfesor(profesor: Profesor): void {
    this.gestionService.deleteProfesor(profesor).subscribe(
      () => {
        this.profesores = this.profesores.filter(p => p._id !== profesor._id);
        this.filtrarProfesores();
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

  filtrarProfesores(): void {
    this.profesoresFiltrados = this.profesores.filter(profesor =>
      profesor.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
    this.currentPage = 1;
  }

  confirmarEliminacionAlumno(alumno: Alumno): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${alumno.nombre}?`);
    if (confirmacion) {
      this.deleteAlumno(alumno._id);
    }
  }

  confirmarEliminacion(profesor: Profesor): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${profesor.nombre} (ID: ${profesor._id})?`);
    if (confirmacion) {
      this.deleteProfesor(profesor);
    }
  }

  iniciarEdicionAlumno(alumno: Alumno): void {
    this.alumnoEnEdicion = { ...alumno };
  }

  iniciarEdicionProfesor(profesor: Profesor): void {
    this.profesorEnEdicion = { ...profesor };
  }

  confirmarActualizacionAlumno(): void {
    const confirmacion = confirm(`¿Estás seguro de actualizar los datos del alumno?`);
    if (confirmacion && this.alumnoEnEdicion) {
      this.updateAlumno(this.alumnoEnEdicion);
      this.alumnoEnEdicion = null;
    }
  }

  confirmarActualizacionProfesor(): void {
    const confirmacion = confirm(`¿Estás seguro de actualizar los datos del profesor?`);
    if (confirmacion && this.profesorEnEdicion) {
      const profesorActualizado: Profesor = {
        ...this.profesorEnEdicion
      };
      this.updateProfesor(profesorActualizado);
      this.profesorEnEdicion = null;
    }
  }
}



