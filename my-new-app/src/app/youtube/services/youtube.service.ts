import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, mergeMap, Observable, of, Subject, switchMap, tap } from "rxjs";
import { Item } from "src/app/auth/models/search-item.model";
import { Response } from "src/app/auth/models/search-response.model";
import { YoutubeResponseService } from "src/app/auth/services/youtube-response.service";


@Injectable({
  providedIn: 'root'
})
export default class YoutubeService {
  youtubeResponseService = new YoutubeResponseService()

  private initDataSubject = new BehaviorSubject<boolean>(false);
  initData$: Observable<boolean> = this.initDataSubject.asObservable();

  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();

  private sortByCountSubject = new BehaviorSubject<boolean>(true);
  sortByCount$: Observable<boolean> = this.sortByCountSubject.asObservable();

  private sortByDateSubject = new BehaviorSubject<boolean>(true);
  sortByDate$: Observable<boolean> = this.sortByDateSubject.asObservable();

  private filterByKeywordSubject = new BehaviorSubject<string>("");
  filterByKeyword$: Observable<string> = this.filterByKeywordSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadPlaylist(query: string): Observable<Item[]> {
    if (query.length > 3) {
      let params = new HttpParams();
      params = params.append('part', 'snippet');
      params = params.append('maxResults', 10);
      params = params.append('q', query);
      return this.http.get<Response>(`/search`, { params })
        .pipe(
          distinctUntilChanged(),
          map((searchResponse: Response) => {
            const videoIds = searchResponse.items.map(item => item.id.videoId);
            return videoIds;
          }),
          tap(res => console.log(res)),
          mergeMap((videoIds: string[]) => this.getVideo(videoIds))
        );
    }
    return of([]);
  }
  public queryValue = new Subject<string>();

    searchPosts(userId: string) {
    this.queryValue.next(userId);
  }

    videos$ = this.queryValue.pipe(
    this.liveSearch((res) => this.fetchvideos(res)),
  );

    liveSearch<T, R>(
    dataCb: (query: T) => Observable<R>,
    delay = 550,
  ) {
    return (source$: Observable<T>) => source$.pipe(
      debounceTime(delay),
      distinctUntilChanged(),
      switchMap(dataCb),
    );
  }

    fetchvideos(name: string): Observable<any> {
    if (name.length >= 3) {
      return this.http.get<any>(`/search?&type=video&part=snippet&maxResults=10&q=${name}`).pipe(
        map((videoResponse: any) => {
          const idList: string[] = videoResponse.items
            .map((item: any) => item.id.videoId);
          return idList;
        }),
        mergeMap((idList) => this.http.get(`/videos?&id=${idList.join(',')}&part=snippet,statistics`)),
      );
    }
    return of([]);
  }

allItem!: Observable<Item[]>;
  getVideo(videoIds: string[]): Observable<any> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('part', 'snippet,statistics');
    searchParams = searchParams.append('id', videoIds.join(','));

    return this.http.get<any>(`/videos`, {
      params: searchParams
    }).pipe(
      debounceTime(250),
      distinctUntilChanged(),
      map(res => this.allItem = res.items),
    );
  }

  initData(initTrigger: boolean) {
    this.initDataSubject.next(initTrigger);
  }

  searchQuery(query: string) {
    this.searchQuerySubject.next(query);
    // console.log(query);
     this.loadPlaylist(query).subscribe(res => res)

  }

  // Sorting
  sortByCount(order: boolean) {
    this.sortByCountSubject.next(order);
  }

  sortByDate(order: boolean) {
    this.sortByDateSubject.next(order);
  }

  filterByValue(value: string) {
    this.filterByKeywordSubject.next(value);
  }
}

