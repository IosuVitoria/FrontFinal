import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn,CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  
  constructor(private authApi: AuthService, private router: Router){}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authApi.getRole())
    // if(!this.authApi.getToken() || this.authApi.getRole() !== 'admin')
    if(!this.authApi.getToken())
    {
      this.router.navigate(['/login']);
    }
    return true;
  }
  
}