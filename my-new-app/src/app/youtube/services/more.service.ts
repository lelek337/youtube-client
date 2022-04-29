import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MoreService {

  constructor(private router:Router) {}

  onClick:EventEmitter<number> = new EventEmitter();

  moreClick(i:number) {
    this.onClick.emit(i);
    this.router.navigate(['/main/more']);
  }
}
