import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from '../models/search-item.model';
import { Response } from '../../redux/state/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeResponseService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();

  static response: Response;

  searchQuery(query: string) {
    this.searchQuerySubject.next(query);
    // console.log(query);
  }

  loadPlaylist(query: string): Observable<Item[]> {
    return of([]);
  }

  getVideo(videoIds: string[]): Observable<any> | null {
    return null;
  }
}
