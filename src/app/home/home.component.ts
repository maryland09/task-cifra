import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {Resource, ResourceResponse, User, UserResponse} from "../types/user";
import {ResourcesService} from "../services/resources.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  // users!: UserResponse
  userResponse: UserResponse = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [{
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }, {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }, {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    }, {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    }, {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    }, {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }],
    "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  }
  resourceResponse: ResourceResponse = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [{"id": 1, "name": "cerulean", "year": 2000, "color": "#98B2D1", "pantone_value": "15-4020"}, {
      "id": 2,
      "name": "fuchsia rose",
      "year": 2001,
      "color": "#C74375",
      "pantone_value": "17-2031"
    }, {"id": 3, "name": "true red", "year": 2002, "color": "#BF1932", "pantone_value": "19-1664"}, {
      "id": 4,
      "name": "aqua sky",
      "year": 2003,
      "color": "#7BC4C4",
      "pantone_value": "14-4811"
    }, {"id": 5, "name": "tigerlily", "year": 2004, "color": "#E2583E", "pantone_value": "17-1456"}, {
      "id": 6,
      "name": "blue turquoise",
      "year": 2005,
      "color": "#53B0AE",
      "pantone_value": "15-5217"
    }],
    "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  }

  userData!: User[]
  resourceData!: Resource[]

  constructor(private userService: UsersService,
              private resourceService: ResourcesService,
              private router: Router) {

    // this.userService.getUsers().subscribe(data => this.userResponse = data)
    this.userService.getUsers().subscribe(response => this.userData = response.data)

    this.resourceService.getResources().subscribe(response => this.resourceData = response.data)

  }

  open(id: number){
    this.router.navigateByUrl('/users/' + id)
  }

  deleteUser(id: number){
    this.userService.deleteUser(id)
    this.userData = this.userData.filter(user => user.id != id)
  }

  ngOnInit(): void {
  }

}
