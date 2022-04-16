import { Component, OnInit } from '@angular/core';
import { FilterTextService } from 'src/app/services/filter-text.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  // filterText = new FilterTextService
  constructor(private sortService: FilterTextService) { }

  ngOnInit(): void {

  }
  onTextInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.sortService.changeText(target.value)
  }

}
