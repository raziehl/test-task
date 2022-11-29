import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.http.post('http://localhost:3000/auth/login', {
      "username": this.credentials.username,
      "password": this.credentials.password
    }).subscribe(console.log);
  }

}
