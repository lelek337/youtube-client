import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { YoutubeResponseService } from 'src/app/auth/services/youtube-response.service';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import { Item } from '../../auth/models/search-item.model';
import { FilterViewService } from '../services/filter-view.service';

@Directive({
  selector: '[appViewFilter]'
})
export class ViewFilterDirective {

  dataItems!: Item[];
  filterService: FilterViewService = new FilterViewService;


  constructor(
    private element:ElementRef,
    private render: Renderer2,
    private youtubeService: YoutubeService,

    ) {
    this.youtubeService.videos$.subscribe((res) => {
      this.dataItems = res.items});
  }

  @HostListener('click') onclick() {
    let index = 0;

    let indexStorage: string | null = sessionStorage.getItem('indexView');
    if (indexStorage) {
      index = +indexStorage
    }

    if (index === 0) {
      index++;
      this.filterService.doClick(this.dataItems.sort((a, b) => a.statistics.viewCount > b.statistics.viewCount ? 1 : -1));
    } else {
      index = 0;
      this.filterService.doClick(this.dataItems.sort((a, b) => a.statistics.viewCount < b.statistics.viewCount ? 1 : -1));
    }

    sessionStorage.setItem('indexView', index.toString() )
  };

}

