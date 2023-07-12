import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  matchpassword:boolean=false;
  aviso:any={
    aviso:""
  };
 
  constructor(private form: FormBuilder, private authApi: AuthService, private router: Router){}

  ngOnInit(): void {
    
    this.loginForm = this.form.group({
      password: ["", [Validators.required]]
      
    })
  }

  onSubmit(){
  
    this.submitted= true;
    
   console.log(this.loginForm.value.password);
   this.aviso.aviso = this.loginForm.value.password;
    if(this.loginForm.valid){
      this.authApi.sendAviso(this.aviso).subscribe((data:any)=>{
        console.log(data);
        Swal.fire({
          title: "Colegio El Huargo",
          text: "Mensaje recibido. Responderemos a la mayor brevedad.",
          width: "50%",
          
          position:"center",
          color:"#000000"
      
      
        });
        this.router.navigate(['/home']);
      },(error)=>{
        console.log(error);
      })
       }
     
      
    }
}
