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
  asignatura: string= ""
  asignaturaActiva: string= ""
  constructor(
    private servicio: ProfesorServiceService,
    private router: Router,
    private authApi: AuthService
  ) {}

  user = JSON.parse(String(sessionStorage.getItem('entidad'))) 

  ngOnInit(): void {
    this.servicio.getAsignatura().subscribe((data: any) => {
      this.nuevoArray = data.filter((asignatura: { profesor: string[] }) => asignatura.profesor.includes(this.user._id));
      console.log(this.nuevoArray);
    });
    
  }
  
cambiarAsignatura(index: number): void { // Método para cambiar la asignatura activa
  this.asignaturaActiva = this.nuevoArray[index]._id;
}

plantillaAsignatura(id: string): void {
  this.asignatura = id;
  this.servicio.getAlumnos().subscribe((data: any) => {
    this.plantillaAlumnos = data.filter((alumno: { asignaturas: string[] }) =>
      alumno.asignaturas.includes(id)
    );
    console.log(this.plantillaAlumnos);

    // Obtener las notas de los alumnos
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



}
