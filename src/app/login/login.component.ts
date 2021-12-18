import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  sendForm(form: NgForm) {

    let data = {
      "email": form.value.email,
      "password": form.value.password
    }

    this.authService.login(data).subscribe({
      next: data => {
        console.log(data)
        window.alert("Login Success")
        this.router.navigateByUrl('/users')
      },
      error: error => {
        window.alert('User not found. Try again')
      }
    })
  }

}
