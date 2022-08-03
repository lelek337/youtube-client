import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { addCard, cardFailed } from '../actions/action';
import { UserState } from '../state/app.state';

@Injectable()
export class AppEffects {

  // Card$ = createEffect(() => this.actions$.pipe(
  //    ofType(addCard),
  //     map((cardData: UserState) => addCard({ cardData })),
  //     catchError(
  //       error => of(cardFailed({
  //           serverError: error.message
  //       }))
  //       )
  //     )
  // );

  constructor(
    private actions$: Actions,
    private store$: Store,
    ) {}
}
