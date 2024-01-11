import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getMethod(url:any){
     return this.http.get(url);
  }
  postmethod(body:any){
    return this.http.post("https://moroccantea.shop/api/getdata.php",body);
  }
}
