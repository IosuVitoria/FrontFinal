import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesorServiceService } from 'src/services/profesor-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})
export class FormDatosComponent {
  datosForm!: FormGroup;
  role?:string;
  user:any;
  

  constructor(
    private formBuilder: FormBuilder,
    private servicio: ProfesorServiceService,
    private router: Router,
  ) {}

  public newDato = this.servicio.profesorData;
  public profesorId = this.servicio.profesorId;

  ngOnInit(): void {
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


    this.datosForm = this.formBuilder.group({
      telefono: [this.newDato.telefono, [Validators.required]],
      email: [this.newDato.email, [Validators.required]],     
    });

    this.datosForm.valueChanges.subscribe((changes) => {
      console.log(changes);
      this.newDato = changes;
    });
 
  }

  onSubmit() {
    
      this.servicio.putProfesor(this.profesorId, this.newDato).subscribe();
      alert("Datos editados");
      this.datosForm.reset();
      this.router.navigate(["profesor"]);
    
    
  }
}