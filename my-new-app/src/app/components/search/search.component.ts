
import { Component, OnInit, } from '@angular/core';
import { ShareService } from 'src/app/services/share-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  index = 0;

  constructor(private share: ShareService) {}

  ngOnInit(): void {}

  public  unloading() {
    this.share.doClick();
  }

}
