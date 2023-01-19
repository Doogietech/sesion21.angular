import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {Authoguards }from '@au
@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  canActivate(

    constructor(private authSvc:  CanActivate){}): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
