import { Component, Input, OnInit } from '@angular/core';
import { GetPremService } from '../Service/get-prem.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  app;
  notNull:boolean;
  reviews;
  notNullOne:boolean;
  constructor(private getService:GetPremService) { 
    this.notNull = false; 
    this.notNullOne=false;
  }

  ngOnInit(): void {
    // this.getService.display().subscribe(gainData => {
    //   this.names = gainData;
    // })
    // this.getService.getMatches().subscribe(gainMatch =>
    //   this.matches = gainMatch)
  }

  getApp(url:HTMLInputElement){
    var id:string[] = url.value.split("id=",2);
    id = id[1].split("&hl",2);
    this.getService.displayApp(id[0]).subscribe(app => 
      {
        this.notNull= true;
        this.notNullOne= false;
        this.app=app;
        console.log(app);
    })
  }

  getReview(url:HTMLInputElement){
    var id:string[] = url.value.split("id=",2);
    id = id[1].split("&hl",2);
    this.getService.displayReview(id[0]).subscribe(app => 
      {
        this.notNull= false;
        this.notNullOne= true;
        this.reviews=app;
        console.log(app);
    })
  }

  counter(i: number) {
    return new Array(i);
}
}
