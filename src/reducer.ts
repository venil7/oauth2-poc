import { Action, API_CALL } from "./actions";

export type State = {
  auth: boolean;
};
export const defaultState: State = {
  auth: false,
};
export const reducer = (state: State = defaultState, action: Action) => {
  switch (action) {
    case API_CALL:
      return state;
    default:
      return state;
  }
};
