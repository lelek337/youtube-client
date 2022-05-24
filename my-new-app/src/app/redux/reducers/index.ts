import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { YoutubeResponseService } from '../state/youtube-response.service';
import { Response } from 'src/app/auth/models/search-response.model'
import { Item } from 'src/app/auth/models/search-item.model';

// import { action } from '../actions/action'

export interface State {
  items: Item[];
};

// const dataItems = new YoutubeResponseService().response.items;
// const initialState = {

// }
// export const reducers: ActionReducerMap<State> = {

// };

// export const addReducer = (state: State = new YoutubeResponseService().response, action) {
//   return state;
// };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
