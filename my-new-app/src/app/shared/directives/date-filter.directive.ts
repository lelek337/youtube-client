import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { YoutubeResponseService } from 'src/app/auth/services/youtube-response.service';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import { Item } from '../../auth/models/search-item.model';
import { FilterDateService } from '../services/filter-date.service';
@Directive({
  selector: '[appDateFilter]'
})
export class DateFilterDirective {
  dataItems!: Item[];
  filterService: FilterDateService = new FilterDateService;

  constructor(
    private element: ElementRef,
    private render: Renderer2,
    private youtubeService: YoutubeService,
    ) {
    this.youtubeService.videos$.subscribe((res) => {
      this.dataItems = res.items});
  }

  @HostListener('click') onclick() {
    let index = 0;
    let indexStorage: string | null = sessionStorage.getItem('indexDate');
    if (indexStorage) {
      index = +indexStorage
    }
    if (index === 0) {
      index++;
      this.filterService.doClick(this.dataItems.sort((a, b) => a.snippet.publishedAt.slice(0, 11) > b.snippet.publishedAt.slice(0, 11) ? 1 : -1));
    }else {
      index = 0;
      this.filterService.doClick(this.dataItems.sort((a, b) => a.snippet.publishedAt.slice(0, 11) < b.snippet.publishedAt.slice(0, 11) ? 1 : -1));
    }
    sessionStorage.setItem('indexDate', index.toString() )
  };

}
