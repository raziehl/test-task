import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string;

  constructor() {
    const accessToken = localStorage.getItem('access-token');
    this.accessToken = accessToken;
  }
  

  isAuthenticated(){
    console.log(this.accessToken)
    return this.accessToken !== null;
  }
}
