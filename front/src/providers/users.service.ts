import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFamily } from "src/app/family";

// https://angular.io/guide/providers

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  /**
   * getUsers
   */
  public getUsers() {
    return this.http.get<IFamily[]>("http://localhost:1337/users").toPromise();
  }
}
