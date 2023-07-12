import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isMobileMenuOpen: boolean = false;
  user = JSON.parse(String(sessionStorage.getItem('user'))) 
 
  constructor( public authApi: AuthService, private router: Router){
  }
 logout(){
    this.authApi.logOut();
    this.router.navigate(['/login']);
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

  }

 

}
