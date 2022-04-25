import { Component } from '@angular/core';
import { YoutubeResponseService} from 'src/app/auth/services/youtube-response.service';
import { Item } from 'src/app/auth/models/search-item.model';
import { MoreService } from '../../services/more.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  dataItem:Item[] = new YoutubeResponseService().response.items;
  index = 1;

  constructor(private moreService:MoreService) {
    this.moreService.onClick.subscribe(cnt=>this.index = cnt);
    console.log(this.index);
   }

}
