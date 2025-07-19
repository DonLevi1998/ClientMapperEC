import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  async onSubmit(form: any) {
    if (!this.email || !this.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }
    this.errorMessage = ''; 
    try {
      const response = await fetch('http://localhost:5030/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      });
      if (response.status === 404) {
        this.errorMessage = "email don't exist";
        return;
      }
      if (response.status === 401) {
        this.errorMessage = 'password incorrect';
        return;
      }
      if (!response.ok) {
        this.errorMessage = 'Login failed.';
        return;
      }
      // Login success
      this.errorMessage = '';
      this.router.navigate(['/main-menu']);
    } catch (error) {
      this.errorMessage = 'Error connecting to the server.';
    }
  }

  goToCreateUser() {
    this.router.navigate(['/create-user']);
  }
}
