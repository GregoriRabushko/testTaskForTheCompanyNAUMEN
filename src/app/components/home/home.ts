import {Component, inject, OnInit} from '@angular/core';
import {Base, User} from '../../services/base';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {Tag} from 'primeng/tag';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    TableModule,
    Tag,
    IconField,
    InputIcon,
    InputText
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home implements OnInit {
  users!: User[];
  userName: string = '';
  filteredUsers: User[] = [];
  private readonly baseService = inject(Base);

  ngOnInit() {
    this.users = this.baseService.getAllUsers();
  }

  searchByNames(name: string) {
    this.filteredUsers = [...this.users.filter(user => user.name.includes(name))];
  }
}
