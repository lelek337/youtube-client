import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    cards = [8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  constructor() { }

  ngOnInit(): void {
  }

}
