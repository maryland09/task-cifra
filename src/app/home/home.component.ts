import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {Resource, ResourceResponse, User, UserResponse} from "../types/user";
import {ResourcesService} from "../services/resources.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      h2 {
        margin: 15px 0 5px 10px;
      }

      mat-card {
        margin: 10px;
        width: 40%;
      }

      button {
        margin: 3px;
      }

      img {
        border-radius: 50%;
      }

      .name {
        width: 200px;
        cursor: pointer;
      }

      section {
        display: table;
      }

      .table {
        width: 100%;
        border: none;
        margin: 20px 20px 0 5px;
      }

      .table thead th {
        font-weight: bold;
        text-align: left;
        border: none;
        padding: 10px 15px;
        background: #d8d8d8;
        font-size: 14px;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }

      .table tbody td {
        text-align: left;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        padding: 10px 15px;
        font-size: 14px;
        vertical-align: top;
      }

      .table thead tr th:first-child, .table tbody tr td:first-child {
        border-left: none;
      }

      .table thead tr th:last-child, .table tbody tr td:last-child {
        border-right: none;
      }

      .table tbody tr:nth-child(even) {
        background: #f3f3f3;
      }


    `
  ]
})
export class HomeComponent implements OnInit {

  userData!: User[]
  resourceData!: Resource[]

  constructor(private userService: UsersService,
              private resourceService: ResourcesService,
              private router: Router) {

    this.userService.getUsers().subscribe(response => this.userData = response.data)
    this.resourceService.getResources().subscribe(response => this.resourceData = response.data)
  }

  goToPage(url: string){
    this.router.navigateByUrl(url)
  }

  open(id: number) {
    this.router.navigateByUrl('/users/' + id)
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
    this.userData = this.userData.filter(user => user.id != id)
  }

  ngOnInit(): void {
  }

}
