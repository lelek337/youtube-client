import { Directive,  ElementRef,  HostBinding,  OnInit, Renderer2, AfterContentInit, Input } from '@angular/core';
import { Item, Snippet } from '../../auth/models/search-item.model';
import Data from 'src/Youtube-response/youtube-response';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit, AfterContentInit {
  @HostBinding('style.backgroundColor') background!: string;

  dataItems: Item[] = Data.items;
  date = new Date;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit () {
  }

  ngAfterContentInit() {
    const index = this.element.nativeElement.textContent;
    const itemYear = this.dataItems[+index].snippet.publishedAt.slice(0, 4);

    const dateYear = this.date.getFullYear();
     if (dateYear - +itemYear < 3) {
      this.background = 'green'
    }
     if (dateYear - +itemYear > 3) {
      this.background = 'red'
    }
  }

}
