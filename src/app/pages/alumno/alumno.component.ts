import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumnoService.component';
import { Alumno } from '../../models/alumno.model';
import { Asignatura } from 'src/app/models/asignatura.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  
  alumno?: Alumno;
  role?:string;
  alumnoId: string | null = null;
  asignaturas: any[] = [];
  console = console;
  user:any;

  constructor(private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit(): void {
    const entidadData = sessionStorage.getItem('entidad');
    // console.log(entidadData);
    const userData = sessionStorage.getItem('user');
    //console.log(userData);
    this.user = JSON.parse(String(userData));
    
    this.role=this.user.role;

    //this.console.log(this.role);
    if (this.role !== "alumno"){
      Swal.fire({
        title: "Colegio El Huargo",
        text: "Para poder acceder es necesario ser alumno",
        width: "50%",
        
        position:"center",
        color:"#000000"
    
    
      });
      this.router.navigate(['/home']);
    }
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
