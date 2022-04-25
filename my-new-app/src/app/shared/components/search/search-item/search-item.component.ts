import { Component, Input } from '@angular/core';
import { MoreService } from 'src/app/youtube/services/more.service';
import { Item } from '../../../../auth/models/search-item.model'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent  {

  @Input() item!: Item;

  constructor(private more:MoreService) {
   }

  onClick() {

    console.log('hello')

  }
}
