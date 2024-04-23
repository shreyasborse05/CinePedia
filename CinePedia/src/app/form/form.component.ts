import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[MovieService]
})
export class FormComponent implements OnInit{
  name="";
  ratings=0;
  suggestions="";
  movieId;
  movie1;
  newReview;
  constructor(private activatedRoute:ActivatedRoute,private movi:MovieService){}
  ngOnInit(): void {
     this.movieId=this.activatedRoute.snapshot.paramMap.get('id');
    this.movie1=this.movi.array.find(x=>Number(x.id) ==this.movieId);
  }
  retrieveData(form: NgForm){
    console.log(form);
    this.name=form.value.name;
    this.ratings = form.value.rating;
    this.suggestions=form.value.suggestionsTextarea;
    this.newReview={'author':this.name,
                    'rating':this.ratings,
                    'review':this.suggestions};
    this.movie1.reviews.push(this.newReview);
    console.log("New Review",this.movie1.reviews);
    
    document.getElementById('jumbotron').innerHTML=`<div class="container mt-5">
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Success!!</h4>
      <p>'Hi, ${this.name}'</p>
      <hr>
      <p>Your rating is: ${this.ratings}</p>
      <p class="mb-0">Thank you for Rating. Your Suggestion is <strong>${this.suggestions}</strong>.</p>
    </div>
  </div>`;
   
  form.reset();
  }
  
  }
