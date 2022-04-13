import { Component, OnInit, Output, Input, AfterViewInit } from '@angular/core';
import Data from 'src/Youtube-response/youtube-response';
import { Item } from '../search-item.model';
import { ShareService } from 'src/app/services/share-service.service';
import { FilterDateService } from 'src/app/services/filter-date.service';
import { FilterViewService } from 'src/app/services/filter-view.service';
import { FilterTextService } from 'src/app/services/filter-text.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit, AfterViewInit {

  dataItem:Item[] = Data.items;
  index = 0;
  searchText = '';
  constructor(
    private share:ShareService,
    private filterDateService:FilterDateService,
    private filterViewService:FilterViewService,
    public filterTextService:FilterTextService,
    ) {
    this.share.onClick.subscribe(cnt=>this.index = cnt);
    this.filterDateService.onClick.subscribe(cnt=>this.dataItem = cnt);
    this.filterViewService.onClick.subscribe(cnt=>this.dataItem = cnt);
    this.filterTextService.onText.subscribe(cnt=>this.searchText = cnt);
    // console.log(this.filterTextService.textService)
  }

  ngOnInit(): void {
    // console.log(this.searchText);
  }
  ngAfterViewInit(): void {

  }
  onClick(){
    // console.log(this.filterTextService.textService);
  }

}
