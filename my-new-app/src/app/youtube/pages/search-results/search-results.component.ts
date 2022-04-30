import { Component} from '@angular/core';
import Data from 'src/Youtube-response/youtube-response';
import { Item } from '../../../auth/models/search-item.model';
import { FilterDateService } from 'src/app/shared/services/filter-date.service';
import { FilterViewService } from 'src/app/shared/services/filter-view.service';
import { FilterTextService } from 'src/app/shared/services/filter-text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent  {
  dataItem:Item[] = Data.items;
  searchText = '';
  idx!:number;
  constructor(
    private router:Router,
    private filterDateService:FilterDateService,
    private filterViewService:FilterViewService,
    public filterTextService:FilterTextService,
    ) {
    this.filterDateService.onClick.subscribe(cnt=>this.dataItem = cnt);
    this.filterViewService.onClick.subscribe(cnt=>this.dataItem = cnt);
    this.filterTextService.onText.subscribe(cnt=>this.searchText = cnt);
  }
  onClick() {
    this.router.navigate(['/main/more']);
  }
}
