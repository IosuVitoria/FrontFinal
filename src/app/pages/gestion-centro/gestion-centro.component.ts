//VERSIÓN SIN ASIGNATURAS

// import { Component, OnInit } from '@angular/core';
// import { GestionService } from '../../../services/gestionService.component';
// import { Alumno } from '../../models/alumno.model';
// import { Profesor } from '../../models/profesor.model';

// @Component({
//   selector: 'app-alumno',
//   templateUrl: './gestion-centro.component.html',
//   styleUrls: ['./gestion-centro.component.css']
// })
// export class GestionCentroComponent implements OnInit {
//   alumnos: Alumno[] = [];
//   profesores: Profesor[] = [];
//   alumnosFiltrados: Alumno[] = [];
//   profesoresFiltrados: Profesor[] = [];
//   alumno: Alumno | undefined;
//   profesor: Profesor | undefined;
//   alumnoEnEdicion: Alumno | null = null;
//   profesorEnEdicion: Profesor | null = null;
//   alumnoId!: string | null;
//   profesorId!: string | null;
//   currentPage: number = 1;
//   pageSize: number = 5;
//   filtroNombre: string = '';

//   constructor(private gestionService: GestionService) { }

//   ngOnInit(): void {
//     this.getAlumnos();
//     this.getProfesores();
//   }

//   getAlumnos(): void {
//     this.gestionService.getAlumnos().subscribe(
//       (alumnos: Alumno[]) => {
//         this.alumnos = alumnos;
//         this.filtrarAlumnos();
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   getProfesores(): void {
//     this.gestionService.getProfesores().subscribe(
//       (profesores: Profesor[]) => {
//         this.profesores = profesores;
//         this.filtrarProfesores();
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   addAlumno(alumno: Alumno): void {
//     this.gestionService.addAlumno(alumno).subscribe(
//       (newAlumno: Alumno) => {
//         this.alumnos.push(newAlumno);
//         this.filtrarAlumnos();
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   addProfesor(profesor: Profesor): void {
//     this.gestionService.addProfesor(profesor).subscribe(
//       (newProfesor: Profesor) => {
//         this.profesores.push(newProfesor);
//         this.filtrarProfesores();
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   updateAlumno(alumno: Alumno): void {
//     this.gestionService.updateAlumno(alumno).subscribe(
//       (updatedAlumno: Alumno) => {
//         const index = this.alumnos.findIndex(a => a._id === updatedAlumno._id);
//         if (index !== -1) {
//           this.alumnos[index] = updatedAlumno;
//           this.filtrarAlumnos();
//         }
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   updateProfesor(profesor: Profesor): void{
//     this.gestionService.updateProfesor(profesor).subscribe(
//       (updatedProfesor: Profesor) => {
//         const index = this.profesores.findIndex(p => p._id === updatedProfesor._id);
//         if (index !== -1) {
//           this.profesores[index] = updatedProfesor;
//           this.filtrarProfesores();
//         }
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//    }

//   deleteAlumno(id: string): void {
//     this.gestionService.deleteAlumno(id).subscribe(
//       () => {
//         this.alumnos = this.alumnos.filter(a => a._id !== id);
//         this.filtrarAlumnos();
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   deleteProfesor(profesor: Profesor): void {
//     if (profesor._id) {
//       this.gestionService.deleteProfesor(profesor._id).subscribe(
//         () => {
//           this.profesores = this.profesores.filter(p => p._id !== profesor._id);
//           this.filtrarProfesores();
//         },
//         (error: any) => {
//           console.error(error);
//         }
//       );
//     } else {
//       console.error('Error: ID de profesor no definido');
//     }
//   }
//   filtrarAlumnos(): void {
//     this.alumnosFiltrados = this.alumnos.filter(alumno =>
//       alumno.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
//     );
//     this.currentPage = 1;
//   }

//   filtrarProfesores(): void {
//     this.profesoresFiltrados = this.profesores.filter(profesor =>
//       profesor.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
//     );
//     this.currentPage = 1;
//   }

//   confirmarEliminacionAlumno(alumno: Alumno): void {
//     const confirmacion = confirm(`¿Estás seguro de eliminar a ${alumno.nombre}?`);
//     if (confirmacion) {
//       if (alumno._id) {
//         this.deleteAlumno(alumno._id);
//       } else {
//         console.error('Error: ID de alumno no definido');
//       }
//     }
//   }
  

//   confirmarEliminacion(profesor: Profesor): void {
//     const confirmacion = confirm(`¿Estás seguro de eliminar a ${profesor.nombre} (ID: ${profesor._id})?`);
//     if (confirmacion) {
//       if (profesor._id) {
//         this.deleteProfesor(profesor);
//       } else {
//         console.error('Error: ID de profesor no definido');
//       }
//     }
//   }
  
//   iniciarEdicionAlumno(alumno: Alumno): void {
//     this.alumnoEnEdicion = { ...alumno };
//   }

//   iniciarEdicionProfesor(profesor: Profesor): void {
//     this.profesorEnEdicion = { ...profesor };
//   }

//   confirmarActualizacionAlumno(): void {
//     const confirmacion = confirm(`¿Estás seguro de actualizar los datos del alumno?`);
//     if (confirmacion && this.alumnoEnEdicion) {
//       this.updateAlumno(this.alumnoEnEdicion);
//       this.alumnoEnEdicion = null;
//     }
//   }

//   confirmarActualizacionProfesor(): void {
//     const confirmacion = confirm(`¿Estás seguro de actualizar los datos del profesor?`);
//     if (confirmacion && this.profesorEnEdicion) {
//       const profesorActualizado: Profesor = {
//         ...this.profesorEnEdicion
//       };
//       this.updateProfesor(profesorActualizado);
//       this.profesorEnEdicion = null;
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../../services/gestionService.component';
import { Alumno } from '../../models/alumno.model';
import { Profesor } from '../../models/profesor.model';
import { Asignatura } from '../../models/asignatura.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './gestion-centro.component.html',
  styleUrls: ['./gestion-centro.component.css']
})
export class GestionCentroComponent implements OnInit {
  alumnos: Alumno[] = [];
  profesores: Profesor[] = [];
  asignaturas: Asignatura[] = [];
  alumnosFiltrados: Alumno[] = [];
  profesoresFiltrados: Profesor[] = [];
  asignaturasFiltradas: Asignatura[] = [];
  alumno: Alumno | undefined;
  profesor: Profesor | undefined;
  asignatura: Asignatura | undefined;
  alumnoEnEdicion: Alumno | null = null;
  profesorEnEdicion: Profesor | null = null;
  asignaturaEnEdicion: Asignatura | null = null;
  alumnoId!: string | null;
  profesorId!: string | null;
  asignaturaId!: string | null;
  currentPage: number = 1;
  pageSize: number = 5;
  filtroNombre: string = '';
  role?:string;
  user:any;

  constructor(private gestionService: GestionService, private router: Router) { }

  ngOnInit(): void {
    const userData = sessionStorage.getItem('user');
    this.user = JSON.parse(String(userData));
    this.role=this.user.role;
    if (this.role !== "admin"){
      Swal.fire({
        title: "Colegio El Huargo",
        text: "Para poder acceder es necesario ser profesor",
        width: "50%",
        
        position:"center",
        color:"#000000"
    
    
      });
      this.router.navigate(['/home']);
    }
    this.getAlumnos();
    this.getProfesores();
    this.getAsignaturas();
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

  getAsignaturas(): void {
    this.gestionService.getAsignaturas().subscribe(
      (asignaturas: Asignatura[]) => {
        this.asignaturas = asignaturas;
        this.filtrarAsignaturas();
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

  addAsignatura(asignatura: Asignatura): void {
    this.gestionService.addAsignatura(asignatura).subscribe(
      (newAsignatura: Asignatura) => {
        this.asignaturas.push(newAsignatura);
        this.filtrarAsignaturas();
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

  updateProfesor(profesor: Profesor): void {
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

  updateAsignatura(asignatura: Asignatura): void {
    this.gestionService.updateAsignatura(asignatura).subscribe(
      (updatedAsignatura: Asignatura) => {
        const index = this.asignaturas.findIndex(a => a._id === updatedAsignatura._id);
        if (index !== -1) {
          this.asignaturas[index] = updatedAsignatura;
          this.filtrarAsignaturas();
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
    if (profesor._id) {
      this.gestionService.deleteProfesor(profesor._id).subscribe(
        () => {
          this.profesores = this.profesores.filter(p => p._id !== profesor._id);
          this.filtrarProfesores();
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else {
      console.error('Error: ID de profesor no definido');
    }
  }

  deleteAsignatura(asignatura: Asignatura): void {
    if (asignatura._id) {
      this.gestionService.deleteAsignatura(asignatura._id).subscribe(
        () => {
          this.asignaturas = this.asignaturas.filter(a => a._id !== asignatura._id);
          this.filtrarAsignaturas();
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else {
      console.error('Error: ID de asignatura no definido');
    }
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

  filtrarAsignaturas(): void {
    this.asignaturasFiltradas = this.asignaturas.filter(asignatura =>
      asignatura.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
    this.currentPage = 1;
  }

  confirmarEliminacionAlumno(alumno: Alumno): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${alumno.nombre}?`);
    if (confirmacion) {
      if (alumno._id) {
        this.deleteAlumno(alumno._id);
      } else {
        console.error('Error: ID de alumno no definido');
      }
    }
  }

  confirmarEliminacionProfesor(profesor: Profesor): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${profesor.nombre} (ID: ${profesor._id})?`);
    if (confirmacion) {
      if (profesor._id) {
        this.deleteProfesor(profesor);
      } else {
        console.error('Error: ID de profesor no definido');
      }
    }
  }

  confirmarEliminacionAsignatura(asignatura: Asignatura): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar la asignatura ${asignatura.nombre}?`);
    if (confirmacion) {
      if (asignatura._id) {
        this.deleteAsignatura(asignatura);
      } else {
        console.error('Error: ID de asignatura no definido');
      }
    }
  }

  iniciarEdicionAlumno(alumno: Alumno): void {
    this.alumnoEnEdicion = { ...alumno };
  }

  iniciarEdicionProfesor(profesor: Profesor): void {
    this.profesorEnEdicion = { ...profesor };
  }

  iniciarEdicionAsignatura(asignatura: Asignatura): void {
    this.asignaturaEnEdicion = { ...asignatura };
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
      const profesorActualizado: Profesor = { ...this.profesorEnEdicion };
      this.updateProfesor(profesorActualizado);
      this.profesorEnEdicion = null;
    }
  }

  confirmarActualizacionAsignatura(): void {
    const confirmacion = confirm(`¿Estás seguro de actualizar los datos de la asignatura?`);
    if (confirmacion && this.asignaturaEnEdicion) {
      const asignaturaActualizada: Asignatura = { ...this.asignaturaEnEdicion };
      this.updateAsignatura(asignaturaActualizada);
      this.asignaturaEnEdicion = null;
    }
  }

  getProfesorNombre(id: string): string {
    const profesor = this.profesores.find(p => p._id === id);
    return profesor ? profesor.nombre : '';
  }
}
