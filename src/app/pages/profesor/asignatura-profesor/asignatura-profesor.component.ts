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
  
  plantillaAsignatura(id: string): void {
  this.asignatura= id 
  this.servicio.getAlumnos().subscribe((data: any) => {
    this.plantillaAlumnos = data.filter((alumno: { asignaturas: string[] }) => alumno.asignaturas.includes(id));
    console.log(this.plantillaAlumnos);
});

} 

verificarnotas(id: string ): void {this.servicio.getNotas().subscribe((data: any) =>{
  this.notas= data.filter((nota: { alumno: string[], asignatura:string }) => nota.asignatura.includes(this.asignatura) && nota.alumno.includes(id) );
  console.log(this.notas);
});

} ;
}
