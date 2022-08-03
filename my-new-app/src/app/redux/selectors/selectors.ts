
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, UserState } from "../state/app.state";

export const getCardStore = createFeatureSelector<AppState>('userState');

export const getCurrentCard = createSelector(
  getCardStore,
  state => state.userState
)
