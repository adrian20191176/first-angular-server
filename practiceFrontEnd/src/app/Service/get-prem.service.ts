import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPremService {

  constructor(private httpCall:HttpClient) {  }

  // display(){
  //   // return this.httpCall.get('');
  //    return this.httpCall.get("/api/clubs");
  // }

  displayApp(id:string){
    return this.httpCall.get("/api/apps/"+id);
  }

  displayReview(id:string){
    return this.httpCall.get("/api/apps/"+id+"/reviews");
  }
}
