import { createSelector } from "reselect";
import { ApplicationRootState } from "../../types";
import { initialState } from "./reducer";
import { stat } from "fs";

/**
 * Direct selector to the testContainer state domain
 */

const selectRecipientsAndOptinsDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */
const makeSelectRecipientsAndOptinsContainer = () =>
  createSelector(
    selectRecipientsAndOptinsDomain,
    (substate: ApplicationRootState) => {
      return substate.recipientsAndOptins;
    }
  );

/**
 * Default selector used by TestContainer
 */

export default makeSelectRecipientsAndOptinsContainer;
export { selectRecipientsAndOptinsDomain };
