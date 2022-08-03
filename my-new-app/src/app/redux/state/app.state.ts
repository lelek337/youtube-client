import { Response } from "./search-response.model";

export interface AppState {
  userState: UserState[],
  responseState: Response
}

export interface UserState {
  title: string,
  discription: string,
  linkImage: string,
  linkVideo: string,
  creationDate: Date,
  videoId?: string
}
