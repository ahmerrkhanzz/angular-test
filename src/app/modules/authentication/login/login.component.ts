import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  emailValidatorRegex,
  stringValidatorRegex,
} from "src/app/constants/globalfunctions";
import { AuthService } from "../authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public isSubmitted: boolean = false;
  public loginForm: FormGroup | any;

  constructor(private _router: Router, private _authService: AuthService) {
    if (localStorage.hasOwnProperty("isLoggedIn")) {
      this._router.navigate(["/cards"]);
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(emailValidatorRegex),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.pattern(stringValidatorRegex),
      ]),
    });
  }

  /**
   *
   * Submit Login Form
   * @param none
   * @returns boolean
   * @memberof LoginComponent
   */
  loginHandler() {
    this.isSubmitted = true;
    const { email, password } = this.loginForm.value;
    this._authService.login({ email, password });
    this.isSubmitted = false;
  }
}
