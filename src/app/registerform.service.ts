import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterformService {

  loggedInUser: any ='';

  constructor(private http: HttpClient) { }


  // getUserInfo(): Observable<any> {
  //   return this.http.get<any>('http://localhost:3000/registeredusers');
  // }

    addUserInformation(body:any){
      return this.http.post("http://localhost:3000/registeredusers", body);
    }



}
