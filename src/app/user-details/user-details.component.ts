import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Support, User} from "../types/user";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId!: number
  userData!: User
  userSupport!: Support

  firstName!: string
  lastName!: string
  email!: string
  editButtonFlag = true

  constructor(private route: ActivatedRoute,
              private userService: UsersService) {
    this.userId = route.snapshot.params['id']
    this.userService.getUserById(this.userId).subscribe(resp => {
      this.userData = resp.data
      this.userSupport = resp.support
      this.firstName = resp.data.first_name
      this.lastName = resp.data.last_name
      this.email = resp.data.email
    })
  }

  ngOnInit(): void {
  }

  sendForm() {
    this.userService.editUser(this.userId, {first_name: this.firstName, last_name: this.lastName, email: this.email})
    this.editButtonFlag = true

    this.userData = {
      id: this.userId,
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      avatar: this.userData.avatar
    }
  }


}
