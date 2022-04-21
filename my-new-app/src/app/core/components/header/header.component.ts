import { Component, OnInit } from '@angular/core';
import { FilterDateService } from 'src/app/shared/services/filter-date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  unloadSorting = false;
  constructor() { }

  ngOnInit(): void {
  }

}
