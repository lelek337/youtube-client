
import { Directive, ElementRef, HostBinding } from '@angular/core';
import YoutubeService from 'src/app/youtube/services/youtube.service';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  @HostBinding('style.backgroundColor') background!: string;

  // dataItems!: Item[]
  date = new Date();
  constructor(
    private element: ElementRef,
    public youtubeService: YoutubeService,
    ) {
      this.youtubeService.videos$.subscribe((res) => {
        // this.dataItems = res.items;
        const itemYear = res.items.snippet.publishedAt.slice(0, 4);
        const dateYear = this.date.getFullYear();

        if (dateYear - +itemYear < 3) {
          this.background = 'green';
        }
        if (dateYear - +itemYear > 3) {
          this.background = 'red';
        }
      });
    }
}
