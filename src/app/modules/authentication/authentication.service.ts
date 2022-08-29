import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  private isAuthenticated: boolean = false;
  constructor(private _router: Router) {}

  public isRouteAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public setIsAuthenticated(isAuth: boolean): void {
    this.isAuthenticated = isAuth;
  }

  logout = () => {
    localStorage.clear();
    this._router.navigate(["/"]);
  };

  login = (params: any) => {
    this._router.navigate(["/cards"]);
    localStorage.setItem("isLoggedIn", "true");
    this.setIsAuthenticated(true);
  };
}
