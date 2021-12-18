import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

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

  constructor(private authService: AuthService,
              private router:Router) {
  }

  ngOnInit(): void {
  }

  sendForm(form: NgForm) {
    let data = {
      "firstName": form.value.firstname,
      "lastName": form.value.lastname,
      "email": form.value.email,
      "password": form.value.password
    }

    this.authService.register(data).subscribe({
      next: data => {
        console.log(data)
        window.alert("Registration Success")
        this.router.navigateByUrl('/users')
      },
      error: error => {
        window.alert('Sorry. Only defined users succeed registration.')
      }
    })

    console.log('data=', data)
  }

}
