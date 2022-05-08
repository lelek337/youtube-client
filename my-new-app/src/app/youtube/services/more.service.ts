import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreService {
  onClick:EventEmitter<number> = new EventEmitter();

  moreClick(i:number) {
    this.onClick.emit(i);
  }
}
