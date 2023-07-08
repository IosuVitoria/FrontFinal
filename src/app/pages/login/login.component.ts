import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserI } from '../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
error:any;
  loginForm!: FormGroup;
  submitted: boolean = false;
  isLogged:boolean=true;
  constructor(private form: FormBuilder, private authApi: AuthService, private router: Router){}
  ngOnInit(): void {
    sessionStorage.clear();
    if (this.authApi.tempUser){
      this.loginForm = this.form.group({
        email: [this.authApi.tempUser.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ["", [Validators.required]],
        role:[this.authApi.tempUser.role,[Validators.required]]
      })
      if(this.authApi.getToken()){
        this.router.navigate(['/home']);
      }
    }
    else{
      this.loginForm = this.form.group({
        email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ["", [Validators.required]],
        role:["",[Validators.required]]
      })
      if(this.authApi.getToken()){
        this.router.navigate(['/home']);
      }
    }
    

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.submitted= true;

   
    if(this.loginForm.valid){
      let user: UserI = this.loginForm.value;
          
        this.authApi.login(user).subscribe((data: any) => {
          console.log(data);
          // localStorage.setItem('token', data.token);
          // localStorage.setItem('user', JSON.stringify(data.user));
          
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('user', JSON.stringify(data.user));
          
          this.router.navigate(['/home']);
          
        },(error)=>{
          console.log(error);
          if (error.error.user.isLogged){this.isLogged=error.error.user.isLogged;}
          if (error.error.user._id){this.authApi.userIdToChangePass=error.error.user._id;}
          
          
          this.error=error})
      }
     
      
    }

    }
  
   

   


