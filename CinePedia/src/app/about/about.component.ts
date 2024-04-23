import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService } from '../movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[MovieService]
})
export class AboutComponent implements OnInit{
  movRat;
  rate='';
  movie1;
  movieId;
  video;

  info;
  info1;
  constructor(private ativatedRoute: ActivatedRoute, private mov: MovieService,private sanitizer: DomSanitizer) {
  }
  
  ngOnInit():void
  {
    this.movieId=this.ativatedRoute.snapshot.paramMap.get('id');
    this.movie1=this.mov.array.find(x=>Number(x.id) ==this.movieId);
    this.info=this.movie1.description.split('.');
    this.info=this.info[0];
    console.log(this.info)

    this.movRat=Math.floor(this.movie1.rating);
    this.video=this.movie1.video;
    for (let i = 0; i <this.movRat; i++) {
      this.rate += '⭐';
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  
} 

