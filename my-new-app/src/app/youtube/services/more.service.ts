import { Injectable, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MoreService {

  constructor(private router:Router) {}

  onClick:EventEmitter<number> = new EventEmitter();
  // @HostListener('click', ['$event.target'])
  moreClick(i:number) {
    this.onClick.emit(i);
    this.router.navigate(['/more']);
    // console.log('hello')
  }
}
