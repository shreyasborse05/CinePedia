import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[MovieService]
})
export class HomeComponent implements OnInit{
  movieGenre;
  starCast;
  movieMaker;
  filterArray:any[];
  allMovies:any[];
  inputText: string='';
  constructor(private mov:MovieService){
  }
  
  ngOnInit(): void {
    this.allMovies=this.mov.array;
    //get the genre passed in through the url parameter and assign it to the variable "abc"
    this.filterArray=this.allMovies;
 
  }
    
    filterg(genre:string){
      this.movieGenre=this.mov.array.filter(x=>x.genre==genre);
      this.filterArray=this.movieGenre;
    }
    filterStar(starcast:string){
      this.movieGenre=this.mov.array.filter(x=>x.starcast==starcast);
      this.filterArray=this.movieGenre;
    }
    Filmmakers(Filmmakers:string){
      this.movieMaker=this.mov.array.filter(x=>x.Filmmakers==Filmmakers);
      this.filterArray=this.movieMaker;
    }
    filterRating(filterRating:number){
      this.movieMaker=this.mov.array.filter(x=>x.rating>=filterRating);
      this.filterArray=this.movieMaker;
    }
    filterYear(filterYear:number){
      this.movieMaker=this.mov.array.filter(x=>x.Recent_Movies>=filterYear);
      this.filterArray=this.movieMaker;
    }
    // onSearchTextEntered(searchValue:string){
    //   this.searchText=searchValue;
    //   console.log(this.searchText);
    // }
    searchText(event:Event){
      this.inputText=(<HTMLInputElement>event.target).value;
      // this.movieGenre=this.movie.array.find();
      console.log(this.inputText);
    }

    
}
