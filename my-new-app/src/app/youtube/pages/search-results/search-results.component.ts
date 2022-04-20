import { Component, OnInit, AfterViewInit } from '@angular/core';
import Data from 'src/Youtube-response/youtube-response';
import { Item } from '../../../auth/models/search-item.model';
import { ShareService } from 'src/app/shared/services/share-service.service';
import { FilterDateService } from 'src/app/shared/services/filter-date.service';
import { FilterViewService } from 'src/app/shared/services/filter-view.service';
import { FilterTextService } from 'src/app/shared/services/filter-text.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent  {

  dataItem:Item[] = Data.items;
  index = 2;
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
  }
}
