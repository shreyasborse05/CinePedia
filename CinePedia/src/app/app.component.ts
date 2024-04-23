import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CinePedia';
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(){

  this.activatedRoute.fragment.subscribe((value)=>{
    console.log(value);
    this.jumpTo(value);
  })
  }
  jumpTo(section){
    document.getElementById(section).scrollIntoView({behavior:'smooth'});
    // document.getElementById(section).style.marginTop='100px';
  }
}
