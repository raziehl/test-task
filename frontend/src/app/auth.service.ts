import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string;

  constructor() { }

  isAuthenticated(){
    return this.accessToken !== undefined;
  }
}
