import { createReducer, on } from "@ngrx/store";
import { Item } from "src/app/auth/models/search-item.model";
import { retrievedResponse } from "../actions/action";
import { Response } from "../state/search-response.model";


export const initialState: ReadonlyArray<Response> = [];

export const ResponseReducer = createReducer(
  initialState,
  on(retrievedResponse, (state, { response }) => response)
);
