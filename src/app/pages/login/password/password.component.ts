import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserI } from '../../../models/user.model';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  matchpassword:boolean=false;
  constructor(private form: FormBuilder, private authApi: AuthService, private router: Router){}

  ngOnInit(): void {
    
    this.loginForm = this.form.group({
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]],
      repeatpassword: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]]
      
    })
  }

  onSubmit(){
    console.log(this.authApi.userIdToChangePass);
    console.log(this.loginForm.value);
    this.submitted= true;
    if (this.loginForm.value.password === this.loginForm.value.repeatpassword){
      this.matchpassword=true;
    }
   console.log(this.matchpassword);
    if(this.loginForm.valid && this.matchpassword){
      let user:UserI;
          
        this.authApi.changePassword(this.loginForm.value.password).subscribe((data: any) => {
          console.log(data);
          this.authApi.tempUser=data;
          this.router.navigate(['/login']);
          
        },(error)=>{
          console.log(error);
        })
      }
     
      
    }
}
