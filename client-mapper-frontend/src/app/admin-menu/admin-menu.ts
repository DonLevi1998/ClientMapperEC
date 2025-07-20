import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalApiUsers } from '../../enviroments/enviroments';

import { User } from '../create-user/user.interface';
@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin-menu.html',
  styleUrls: ['./admin-menu.css']
})
export class AdminMenu implements OnInit {
  users: User[] = [];
  newUser: User = { name: '', email: '', telephone: '', address: '', password: '' };
  editUserData: User | null = null;
  showModal = false;
  showEditModal = false;
  errorMessage = '';
  successMessage = '';

  constructor() {
    this.loadUsers();
  }

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
  try {
    const res = await fetch(LocalApiUsers.ApiListUser);
    this.users = await res.json();
  } catch {
    this.errorMessage = 'Error loading users.';
  }
}

  openModal() {
    this.showModal = true;
    this.errorMessage = '';
    this.newUser = { name: '', email: '', telephone: '', address: '', password: '' };
  }

  closeModal() {
    this.showModal = false;
  }

  async addUser() {
  try {
  const res = await fetch(LocalApiUsers.ApiCreateUser, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(this.newUser)
  });
  if (!res.ok) throw new Error();
  await this.loadUsers();
  this.closeModal();
  this.successMessage = 'Usuario creado exitosamente';
  setTimeout(() => this.successMessage = '', 3000);
  } catch {
  this.errorMessage = 'Error creando usuario.';
  }
  }

  async deleteUser(id: number | undefined) {
    if (!id) {
      this.errorMessage = '';
      return;
    }
    try {
      const res = await fetch(LocalApiUsers.ApiDeleteUser + id, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      await this.loadUsers();
      this.successMessage = 'Usuario eliminado exitosamente';
      setTimeout(() => this.successMessage = '', 3000);
    } catch {
      this.errorMessage = 'Error eliminando usuario.';
    }
  }
  openEditModal(user: User) {
  this.editUserData = { ...user };
  this.showEditModal = true;
  this.errorMessage = '';
  this.successMessage = '';
}
closeEditModal() {
  this.showEditModal = false;
  this.editUserData = null;
}

  editUser(user: any) {
    this.editUserData = { ...user };
  }

  async updateUser() {
  if (!this.editUserData || !this.editUserData.idusers) {
  this.errorMessage = '';
  return;
  }
  try {
  const res = await fetch(LocalApiUsers.ApiUpdateUser + this.editUserData.idusers, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(this.editUserData)
  });
  if (!res.ok) throw new Error();
  await this.loadUsers();
  this.closeEditModal();
  this.successMessage = 'Usuario actualizado exitosamente';
  setTimeout(() => this.successMessage = '', 3000);
  } catch {
  this.errorMessage = 'Error actualizando usuario.';
  }
  }

  cancelEdit() {
    this.editUserData = null;
  }
}
