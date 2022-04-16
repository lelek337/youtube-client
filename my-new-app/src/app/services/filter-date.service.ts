import { Injectable, EventEmitter } from '@angular/core';
import { Item } from '../components/search/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class FilterDateService {
  constructor() { }

  onClick:EventEmitter<Item[]> = new EventEmitter();
  public doClick(i: Item[]){
    this.onClick.emit(i);
  }


}
