import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  enteredText:string='';

  // @Output()
  // searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.enteredText);
  // }
  ngOnInit(): void {
    
  }
}
