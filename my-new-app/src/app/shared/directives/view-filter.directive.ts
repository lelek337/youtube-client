import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { YoutubeResponseService } from 'src/app/redux/state/youtube-response.service';
import { Item } from '../../auth/models/search-item.model';
import { FilterViewService } from '../services/filter-view.service';

@Directive({
  selector: '[appViewFilter]'
})
export class ViewFilterDirective {

 dataItems: Item[] = new YoutubeResponseService().response.items;
  filterService: FilterViewService = new FilterViewService;


  constructor(private element:ElementRef, private render: Renderer2, ) {}

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

