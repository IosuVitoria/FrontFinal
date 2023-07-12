import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AsignaturaService } from 'src/services/asignaturaService.component';
import { GestionService } from 'src/services/gestionService.component';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
  role?:string;
  user:any;
  
  constructor(
    private asignaturaService: AsignaturaService,
    private gestionService: GestionService, private router: Router
  ) {}
  ngOnInit():void{
    const userData = sessionStorage.getItem('user');
    this.user = JSON.parse(String(userData));
    this.role=this.user.role;
    if (this.role !== "profesor"){
      Swal.fire({
        title: "Colegio El Huargo",
        text: "Para poder acceder es necesario ser profesor",
        width: "50%",
        
        position:"center",
        color:"#000000"
    
    
      });
      this.router.navigate(['/home']);
    }

}

}
