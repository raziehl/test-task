import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileName;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.auth.accessToken}`
        })

        const upload = this.http.post("http://localhost:3000/upload", formData, { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.auth.accessToken}`
          }
        });

        upload.subscribe();
    }
  }
}
