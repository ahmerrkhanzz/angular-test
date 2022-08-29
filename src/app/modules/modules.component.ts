import { Component, OnInit } from "@angular/core";
import { AuthService } from "./authentication/authentication.service";

@Component({
  selector: "app-modules",
  templateUrl: "./modules.component.html",
  styleUrls: ["./modules.component.scss"],
})
export class ModulesComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    console.log('her');
    
    // if (localStorage.hasOwnProperty("isLoggedIn")) {
    //   this._authService.setIsAuthenticated(true);
    // }
  }
}
