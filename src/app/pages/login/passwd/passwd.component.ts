import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserI } from '../../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-passwd',
  templateUrl: './passwd.component.html',
  styleUrls: ['./passwd.component.css']
})
export class PasswdComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  matchpasswd:boolean=false;
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
      this.matchpasswd=true;
    }
   console.log(this.matchpasswd);
    if(this.loginForm.valid && this.matchpasswd){
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
