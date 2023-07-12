import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../../../services/gestionService.component';
import { Asignatura } from '../../../models/asignatura.model';
import { Profesor } from '../../../models/profesor.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
        text: "Para poder acceder es necesario ser administrador",
        width: "50%",
        
        position:"center",
        color:"#000000"
    
    
      });
      this.router.navigate(['/home']);
    }

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
