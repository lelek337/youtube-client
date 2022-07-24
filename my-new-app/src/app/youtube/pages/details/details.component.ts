import { Component } from '@angular/core';
import { Item } from 'src/app/auth/models/search-item.model';
import { MoreService } from '../../services/more.service';
import { Router } from '@angular/router';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  dataItem!: Item;

  constructor(
    private moreService: MoreService,
    private router: Router,
    private youtubeService: YoutubeService,
    ) {
    this.youtubeService.videos$.subscribe((res) => {
      this.dataItem = res;
      console.log(res)
    });
      // console.log(this.dataItem)
  }

  clickBack() {
    this.router.navigate(['/main']);
  }
}
