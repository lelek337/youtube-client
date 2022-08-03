import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserState } from '../state/app.state';

@Injectable({
  providedIn: 'root'
})
export class CardReduxService {

  constructor(private httpClient: HttpClient) { }

  getCard(userCard: UserState) {

  }

  // getMenu() {
  //   return this.httpClient.get<NestedTreeNode[]>('http://localhost:3000/menu')
  // }
}
