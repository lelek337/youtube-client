
import { Component } from '@angular/core';
import { ShareService } from 'src/app/services/share-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  constructor(private share: ShareService) {}

  public  unloading() {
    this.share.doClick();
  }

}
