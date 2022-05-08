import { Component } from '@angular/core';
import { FilterTextService } from 'src/app/shared/services/filter-text.service';




@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent  {
  constructor(private sortService: FilterTextService) { }

  onTextInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.sortService.changeText(target.value)
  }
}
