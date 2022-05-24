import { Item, } from '../../auth/models/search-item.model';
import { Directive, ElementRef, HostBinding, Renderer2, AfterContentInit } from '@angular/core';
import { YoutubeResponseService } from 'src/app/redux/state/youtube-response.service';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective implements  AfterContentInit {
  @HostBinding('style.backgroundColor') background!: string;
  dataItems: Item[] = new YoutubeResponseService().response.items;
  date = new Date();
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit() {
    const index = this.element.nativeElement.textContent;
    const itemYear = this.dataItems[+index].snippet.publishedAt.slice(0, 4);
    const dateYear = this.date.getFullYear();
     if (dateYear - +itemYear < 3) {
      this.background = 'green';
    }
     if (dateYear - +itemYear > 3) {
      this.background = 'red';
    }
  }
}
