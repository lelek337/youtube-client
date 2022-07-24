import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreService {
  onClick: EventEmitter<number> = new EventEmitter();

  moreClick(i: number) {
    // console.log(i)
    this.onClick.emit(i);
  }
}
