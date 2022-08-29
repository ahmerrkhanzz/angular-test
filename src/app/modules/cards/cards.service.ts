import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  constructor(private _http: HttpClient) {}

  getListData = () => {
    let url: string = "../../../assets/mock/Angular Practice.json";
    return this._http.get(url);
  };
}
