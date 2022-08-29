import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./inerfaces/User";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  saveUser = (userData: User) => {
    console.log(userData);
  };
}
