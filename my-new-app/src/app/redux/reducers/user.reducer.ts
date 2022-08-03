import { createReducer, on } from '@ngrx/store';
import { UserState } from '../state/app.state';
import *as UserActions from '../actions/action';

export interface UserCard {
  card: UserState | null,
  isFetched: boolean
}

const initialState: UserCard = {
  card: null,
  isFetched: false
};

export const cardReducer = createReducer(
  initialState,
  on(UserActions.fetchCardSuccess, (state, { card }) =>  ({
    ...state,
    card,
    isFetched: true,
  })),
  on(UserActions.cardFailed, state => ({
    ...state,
    isFetched:true
  }))
);

