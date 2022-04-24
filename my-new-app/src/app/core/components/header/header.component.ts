import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterDateService } from 'src/app/shared/services/filter-date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  unloadSorting = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  routerLogin() {
    this.router.navigate(['/login'])
  }
}
