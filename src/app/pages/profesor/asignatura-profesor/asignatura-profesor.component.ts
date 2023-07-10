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
  arrayAsignatura: any[] = [];
  nuevoArray: any[] = [];
  id: any = "64a702ae0e6ea120aa93da0f";

  constructor(
    private servicio: ProfesorServiceService,
    private router: Router,
    private authApi: AuthService
  ) {}

  ngOnInit(): void {
    this.servicio.getAsignatura().subscribe((data: any) => {
      this.arrayAsignatura = data;
      this.filterAsignaturasByProfesorId();
    });
  }

  filterAsignaturasByProfesorId(): void {
    for (const asignatura of this.arrayAsignatura) {
      if (asignatura.profesor.includes(this.id)) {
        this.nuevoArray.push(asignatura);
      }
    }
    console.log(this.nuevoArray);
  }
}
