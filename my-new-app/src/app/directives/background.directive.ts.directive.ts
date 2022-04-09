import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { Item } from 'src/Youtube-response/youtube-response-type';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @HostBinding('style.backgroundColor') background!: string;
  // @Input() item!: Item;
  constructor() { }

  ngOnInit () {
    this.background = 'red'
    // console.log(this.item.snippet.publishedAt)
  }

}
