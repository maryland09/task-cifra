import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";

export interface Data {
  id: number,
  token: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  sendForm(form: NgForm) {
    let data = {
      "firstName": "rr",
      "lastName": "ffff",
      "email": "eve.holt@reqres.in",
      "password": "ss!S3hggg"
    }

    this.authService.register(data).subscribe(data => console.log(data))


    // this.authService.login(data).subscribe({
    //   next: data => {
    //     console.log(data)
    //   },
    //   error: error => {
    //     window.alert('There was an error!')
    //   }
    // })

    console.log('data=', data)
  }
}
