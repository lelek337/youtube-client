import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterTextService {
  // constructor() { }
  textService = '';
  onText:EventEmitter<string> = new EventEmitter();
   changeText(text: string){
    this.onText.emit(text);
    // this.textService = text;
    // console.log(this.textService)
  }
}
