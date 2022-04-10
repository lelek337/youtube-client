import { Component, OnInit, Output, Input } from '@angular/core';
import Data from 'src/Youtube-response/youtube-response';
import { Response } from '../search-response.model';
import { Item } from '../search-item.model';
import { ShareService } from 'src/app/services/share-service.service';
import { FilterDateService } from 'src/app/services/filter-date.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit {

  dataItem:Item[] = Data.items;
  index = 0

  constructor(
    private share:ShareService,
    private filterDateService:FilterDateService
    ) {
    this.share.onClick.subscribe(cnt=>this.index = cnt);
    this.filterDateService.onClick.subscribe(cnt=>this.dataItem = cnt);
  }

  ngOnInit(): void {
    // console.log(this.itemsSort);
  }

}
