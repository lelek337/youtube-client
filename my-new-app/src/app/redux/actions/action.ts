import { createAction, props } from '@ngrx/store';
import { UserState } from '../state/app.state';
import { Response } from '../state/search-response.model';

const actionSourse = '[userReducer]';

export const fetchCard = createAction(
`${actionSourse} Fetch Card`
);
export const fetchCardSuccess = createAction(
`${actionSourse} Fetch Card Success`,
props<{card: UserState}>()
);
export const fetchCardFaild = createAction(
`${actionSourse} Feach Card Faild`
);




export const addCard = createAction(
  '[Card List] Add Card',
  props<{cards: ReadonlyArray<UserState>}>()
);

export const removeCard = createAction(
  '[Card Collection] Remove Card',
  props<{ videoId: string }>()
);

export const retrievedResponse = createAction(
  '[Response/API] Retrieve Response Success',
  props<{ response: ReadonlyArray<Response> }>()
);

export const cardFailed = createAction(
  '[Admin Auth] Card Success',
    props<{serverError: string}>()
);
