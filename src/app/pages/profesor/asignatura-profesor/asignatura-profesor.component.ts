import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ProfesorServiceService } from 'src/services/profesor-service.service';

@Component({
  selector: 'app-asignatura-profesor',
  templateUrl: './asignatura-profesor.component.html',
  styleUrls: ['./asignatura-profesor.component.css']
})
export class AsignaturaProfesorComponent implements OnInit {
  nuevoArray: any[] = [];
  plantillaAlumnos: any[] = [];
  notas: any[] = [];
  asignatura: string = "";
  asignaturaActiva: string = "";
  notaId: string = "";
  notaEditada: string = "";
  editarNota: boolean = false;
  sortOrder: string = 'asc';

  public calificacion: any = {
    nota: "",
    asignatura: "",
    alumno: "",
  };

  constructor(
    private servicio: ProfesorServiceService,
    private router: Router,
    private authApi: AuthService
  ) {}

  user = JSON.parse(String(sessionStorage.getItem('entidad')));

  ngOnInit(): void {
    this.servicio.getAsignatura().subscribe((data: any) => {
      if (this.user && this.user._id) {
        this.nuevoArray = data.filter((asignatura: { profesor: string[] }) => asignatura.profesor.includes(this.user._id));
        console.log(this.nuevoArray);
      }
    });
  }

  plantillaAsignatura(id: string): void {
    this.asignatura = id;
    this.asignaturaActiva = id;
    this.servicio.getAlumnos().subscribe((data: any) => {
      this.plantillaAlumnos = data.filter((alumno: { asignaturas: string[] }) =>
        alumno.asignaturas.includes(id)
      );
      console.log(this.plantillaAlumnos);

      this.servicio.getNotas().subscribe((notasData: any) => {
        this.notas = notasData.filter(
          (nota: { alumno: string[]; asignatura: string[] }) =>
            nota.asignatura.includes(id) &&
            this.plantillaAlumnos.some((alumno) =>
              nota.alumno.includes(alumno._id)
            )
        );
        console.log(this.notas);
      });
    });
  }

  calificar(alumnoId: string): void {
    this.plantillaAlumnos.forEach((alumno) => {
      if (alumno._id === alumnoId) {
        alumno.calificar = true;
        this.notaEditada = "";
        this.editarNota = true;
      } else {
        alumno.calificar = false;
      }
    });
    this.calificacion = this.notas.filter((alumno: { alumno: string[] }) => alumno.alumno.includes(alumnoId));
    console.log(this.notas);
    if (this.calificacion.length > 0) {
      this.notaId = this.calificacion[0]._id;
      console.log(this.notaId);
    } else {
      this.notaId = "";
    }
  }

  guardarNota(event: any, alumnoId: string): void {
    event.preventDefault();
    const nota = event.target.nota.value;

    console.log(`Guardar nota ${nota} para el alumno con ID ${alumnoId}`);
    const notaActualizada = this.notas.find((nota) => nota.alumno.includes(alumnoId));
    if (notaActualizada) {
      notaActualizada.nota = nota;
    }

    if (this.notaId) {

      this.servicio.putNota(this.notaId, { nota }).subscribe(
        (response) => {
          alert('Nota actualizada');
        },
        (error) => {
          console.error('Error al actualizar la nota en la base de datos', error);
        }
      );
    } else {
      const nuevaNota = {
        nota,
        asignatura: this.asignatura,
        alumno: alumnoId
      };
      this.servicio.postNotas(nuevaNota).subscribe(
        (response) => {
          console.log('Nueva nota creada en la base de datos', response);
          alert('Nota enviada');
          location.reload();
        },
        (error) => {
          console.error('Error al crear la nueva nota en la base de datos', error);
        }
      );
    }
    this.plantillaAlumnos.forEach((alumno) => {
      alumno.calificar = false;
    });
  }

  // ...
sortTable(column: string): void {
  if (column === 'nombre' || column === 'apellidos') {
    this.plantillaAlumnos.sort((a, b) => {
      const aValue = a[column].toLowerCase();
      const bValue = b[column].toLowerCase();
      if (this.sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  } else if (column === 'nota') {
    this.plantillaAlumnos.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      if (this.sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  } else if (column === 'Curso') {
    this.plantillaAlumnos.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      if (this.sortOrder === 'asc') {
        return this.compareCurso(aValue, bValue);
      } else {
        return this.compareCurso(bValue, aValue);
      }
    });
  }
}

compareCurso(cursoA: string, cursoB: string): number {
  const partsA = cursoA.split(/(\d+)/).filter(Boolean);
  const partsB = cursoB.split(/(\d+)/).filter(Boolean);
  
  for (let i = 0; i < Math.min(partsA.length, partsB.length); i++) {
    const partA = partsA[i];
    const partB = partsB[i];
    const isNumericA = /^\d+$/.test(partA);
    const isNumericB = /^\d+$/.test(partB);

    if (isNumericA && isNumericB) {
      const numA = parseInt(partA, 10);
      const numB = parseInt(partB, 10);
      if (numA !== numB) {
        return numA - numB;
      }
    } else {
      const result = partA.localeCompare(partB);
      if (result !== 0) {
        return result;
      }
    }
  }

  return partsA.length - partsB.length;
}
// ...

}