import { Component, OnInit } from '@angular/core';
import Data from '../../../../Youtube-response/youtube-response';
import { Response } from '../search-response.model';
import { Item } from '../search-item.model'
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  data: Response = Data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
