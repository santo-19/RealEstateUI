import { Injectable } from '@angular/core';
import { user } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
addUser(user: user){
  let users = [];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user, ...users];
  }
  else{
    users =[user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}
}
