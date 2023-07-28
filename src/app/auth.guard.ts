import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const jwtHelper = inject(JwtHelperService);  

  const token = localStorage.getItem('token');

  if(token && !jwtHelper.isTokenExpired(token)){
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }

};
