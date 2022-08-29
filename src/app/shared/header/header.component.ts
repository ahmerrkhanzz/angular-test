import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/modules/authentication/authentication.service";

@Component({
  selector: "jni-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  signoutHandler() {
    this._authService.logout();
  }
}
