import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeResponseService } from 'src/app/auth/services/youtube-response.service';
import  YoutubeService  from 'src/app/youtube/services/youtube.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  unloadSorting = false;
  constructor(private router:Router,
              private youtubeService: YoutubeService) { }

  routerLogin() {
    this.router.navigate(['/login'])
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.youtubeService.searchQuery(target.value);
    // this.youtubeService.loadPlaylist(target.value).subscribe(res => console.log(res));
  }
}
