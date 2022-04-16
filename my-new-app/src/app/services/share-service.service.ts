import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  private clickCnt = 0;

  onClick:EventEmitter<number> = new EventEmitter();

  public doClick(){
    this.clickCnt = 2;
    this.onClick.emit(this.clickCnt);
  }

}
