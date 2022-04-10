import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import Data from 'src/Youtube-response/youtube-response';
import { Item } from '../components/search/search-item.model';
import { FilterDateService } from '../services/filter-date.service';

@Directive({
  selector: '[appDateFilter]'
})
export class DateFilterDirective {

  dataItems: Item[] = Data.items;
  filterService: FilterDateService = new FilterDateService;


  constructor(private element:ElementRef, private render: Renderer2, ) {
       }

  @HostListener('click') onclick() {
    let index = 0;

    let indexStorage: string | null = sessionStorage.getItem('index');
    if (indexStorage) {
      index = +indexStorage
    }

    if (index === 0) {
      //  this.dataItems.sort((a, b) => a.snippet.publishedAt.slice(0, 11) > b.snippet.publishedAt.slice(0, 11) ? 1 : -1);
      index++;
      this.filterService.doClick(this.dataItems.sort((a, b) => a.snippet.publishedAt.slice(0, 11) > b.snippet.publishedAt.slice(0, 11) ? 1 : -1));
    }else {
      //  this.dataItems.sort((a, b) => a.snippet.publishedAt.slice(0, 11) < b.snippet.publishedAt.slice(0, 11) ? 1 : -1);
      index = 0;
      this.filterService.doClick(this.dataItems.sort((a, b) => a.snippet.publishedAt.slice(0, 11) < b.snippet.publishedAt.slice(0, 11) ? 1 : -1));
    }

    sessionStorage.setItem('index', index.toString() )
  };

}
