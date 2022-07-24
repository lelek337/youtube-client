import { Pipe, PipeTransform } from '@angular/core';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import { Item } from '../../auth/models/search-item.model';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {
dataItem!:Item[];

constructor (private youtubeService: YoutubeService ) {
  this.youtubeService.videos$.subscribe((res) => {
    this.dataItem = res.items});
}

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
