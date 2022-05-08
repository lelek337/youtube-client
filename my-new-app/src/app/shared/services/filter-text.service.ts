import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterTextService {
 
  textService = '';
  onText:EventEmitter<string> = new EventEmitter();
   changeText(text: string){
    this.onText.emit(text);
  }
}
