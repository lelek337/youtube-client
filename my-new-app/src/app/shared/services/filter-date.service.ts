import { Injectable, EventEmitter } from '@angular/core';
import { Item } from '../../auth/models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class FilterDateService {
  onClick:EventEmitter<Item[]> = new EventEmitter();
  public doClick(i: Item[]){
    this.onClick.emit(i);
  }
}
