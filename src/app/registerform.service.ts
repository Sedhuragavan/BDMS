import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterformService {

  loggedInUser: any ='';

  constructor(private http: HttpClient) { }

    addUserInformation(body:any){
      return this.http.post("http://localhost:3000/registeredusers", body);
    }

    updateUserInformation(body:any, id:any){
      return this.http.patch('http://localhost:3000/registeredusers/'+id, body);
    }
  
    loginUser(): Observable<any>{
      return this.http.get("http://localhost:3000/registeredusers")
    }

    getDonationHistory(loggedInUser: any) {
      
      return this.http.get("http://localhost:3000/registeredusers");
    }

    addDonationHistory(donations:any, id:any): Observable<any> {
      
      return this.http.patch('http://localhost:3000/registeredusers/'+id ,donations)
      //  return this.store.patch(this.url + '/' + id, data);
    }


}
