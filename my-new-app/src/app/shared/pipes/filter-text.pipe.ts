import { Pipe, PipeTransform } from '@angular/core';
import Data from 'src/Youtube-response/youtube-response';
import { Item } from '../../auth/models/search-item.model';
import { SortingComponent } from '../../core/components/header/sorting/sorting.component';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  
  public transform(dataItems:Item[], searchText:string) {

   if (searchText.length === 0) {
      return dataItems;
    }
    return dataItems
      ? dataItems.filter(
        (video: Item) => video.snippet.title.toLocaleLowerCase().trim()
          .includes(searchText.toLocaleLowerCase().trim()),
      )
      : dataItems;
  }

}
