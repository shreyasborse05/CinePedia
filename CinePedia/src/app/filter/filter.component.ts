import { Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() genre = new EventEmitter<string>();
  @Output() Starcast = new EventEmitter<string>();
  @Output()  Filmmakers = new EventEmitter<string>();
  @Output()  Rating = new EventEmitter<number>();
  @Output()  Year = new EventEmitter<number>();
  filterGenre(value: string){
    this.genre.emit(value);//this value will be emitted to the parent class
  }
  filterStar(value:string ){
    this.Starcast.emit(value);//this value will be emitted to the parent class
  }
  filterMaker(value: string){
    this. Filmmakers.emit(value);//this value will be emitted to the parent class
  }
  filterRating(value: number){
    this. Rating.emit(value);//this value will be emitted to the parent class
  }
  filterYear(value: number){
    this. Year.emit(value);//this value will be emitted to the parent class
  }
}
