import {  ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Item } from '../../../auth/models/search-item.model';
import { FilterDateService } from 'src/app/shared/services/filter-date.service';
import { FilterViewService } from 'src/app/shared/services/filter-view.service';
import { FilterTextService } from 'src/app/shared/services/filter-text.service';
import { Router } from '@angular/router';
import { YoutubeResponseService } from 'src/app/auth/services/youtube-response.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchResultsComponent implements OnInit {
  // items = new YoutubeResponseService().response.items;
resItem!: Item[];
  items = this.youtubeResponse.response.items;
  // items$ = this.youtubeService.allItem
qwe() {
  // console.log(this.items);
// this.youtubeService.allItem = this.resItem;
console.log(this.youtubeService.allItem );
// this.youtubeService.allItem.subscribe((res) => this.resItem = res)
}


  // private dataVideoItems = new BehaviorSubject<any>(this.getVideo);
  // dataItems$: Observable<any> = this.dataVideoItems.asObservable();

  searchText = '';
  idx!:number;
  constructor(
    public youtubeService:YoutubeService,
    private youtubeResponse:YoutubeResponseService,
    private router:Router,
    private filterDateService:FilterDateService,
    private filterViewService:FilterViewService,
    public filterTextService:FilterTextService,
    ) {
    this.filterDateService.onClick.subscribe(cnt=>this.items = cnt);
    this.filterViewService.onClick.subscribe(cnt=>this.items = cnt);
    this.filterTextService.onText.subscribe(cnt=>this.searchText = cnt);
    // this.getVideo$.subscribe(res => console.log(res))
    // console.log(this.getVideo$)
  }

  getVideo =this.youtubeService.getVideo;

  onClick() {
    this.router.navigate(['/main/more']);
  }

  ngOnInit(): void {
    console.log(this.getVideo)
  }
}
