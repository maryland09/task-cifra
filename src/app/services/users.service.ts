import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {UserInfoResponse, UserResponse} from "../types/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) {
  }

  getUsers() {
    return this.http.get<UserResponse>('https://reqres.in/api/users?page=2')
  }

  getUserById(id: number) {
    return this.http.get<UserInfoResponse>('https://reqres.in/api/users/' + id)
  }

  editUser(id: number, data: any){
    this.http.put<any>('https://reqres.in/api/users/'+id, data)
      .subscribe({
        next: data => {console.log(data)
        },
        error: error => {
          console.error('There was an error!', error.message);
        }
      });
  }

  deleteUser(id: number){
    this.http.delete('https://reqres.in/api/users/' + id)
      .subscribe({
        next: data => {
          console.log('Delete successful');
        },
        error: error => {
          console.error('There was an error!', error.message);
        }
      });
  }


}
