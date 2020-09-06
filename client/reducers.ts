/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import recipientsAndOptinsReducer from "./containers/RecipientsAndOptins/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  return combineReducers({
    recipientsAndOptins: recipientsAndOptinsReducer,
  });
}
