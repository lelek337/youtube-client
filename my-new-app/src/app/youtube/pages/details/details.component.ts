import { Component } from '@angular/core';
import { YoutubeResponseService} from 'src/app/auth/services/youtube-response.service';
import { Item } from 'src/app/auth/models/search-item.model';
import { MoreService } from '../../services/more.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  dataItem:Item[] = new YoutubeResponseService().response.items;
  index = 1;

  constructor(private moreService:MoreService, private router:Router) {
    this.moreService.onClick.subscribe(cnt=>this.index = cnt);
    console.log(this.index);
   }

  clickBack() {
    this.router.navigate(['/main']);
  }
}
