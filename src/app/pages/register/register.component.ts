import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role?:string;
  user:any;

  constructor(
     private router: Router
  ) {}
  ngOnInit():void{
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

}

}
