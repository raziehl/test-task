import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  powers: []

  credentials: {
    username: string,
    password: string
  } = {
    username: '', // john
    password: '' // changeme
  }

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.http.post('http://localhost:3000/auth/login', {
      "username": this.credentials.username,
      "password": this.credentials.password
    }).subscribe((res: {access_token: string}) => {
      if(res.access_token) {
        this.auth.accessToken = res.access_token;
        localStorage.setItem('access-token', res.access_token);
        this.router.navigate(['/home']);
      }
    }, console.log);
  }

}
