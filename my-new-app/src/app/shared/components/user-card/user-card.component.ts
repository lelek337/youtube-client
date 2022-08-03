import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { UserCard } from 'src/app/redux/reducers/user.reducer';
import { CardReduxService } from 'src/app/redux/services/card-redux.service';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  // dataCard: UserCard;
  // state$: AppState = [];

  constructor(private cardReduxService: CardReduxService) { }

  ngOnInit(): void {
  console.log('Hello')
  }
}
