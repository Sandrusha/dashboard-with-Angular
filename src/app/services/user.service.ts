import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { USER } from '../mocks/mock-users';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }
  
  getUser(): User {
    return USER;
  }
}