import ActionTypes from "./constants";
import { ContainerState, ContainerActionsAndTypes } from "./types";

// The initial state of the App
export const initialState: ContainerState = {
  fullname: "Jan Dave Arce | Applicant",
  listOptins: [],
  listRecipients: [],
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function recipientsAndOptinsReducer(
  state: ContainerState = initialState,
  action: ContainerActionsAndTypes
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_LIST_OPTINS_SUCCESS:
      return Object.assign({}, state, { listOptins: action.payload });
    case ActionTypes.GET_LIST_RECIPIENTS_SUCCESS:
      return Object.assign({}, state, { listRecipients: action.payload });
    default:
      return state;
  }
}

export default recipientsAndOptinsReducer;
