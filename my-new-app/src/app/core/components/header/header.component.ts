import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  unloadSorting = false;
  constructor(private router:Router) { }

  routerLogin() {
    this.router.navigate(['/login'])
  }
}
