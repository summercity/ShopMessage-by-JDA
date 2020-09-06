import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

/* --- STATE --- */

interface State {
  readonly fullname: string;
  readonly listOptins: [];
  readonly listRecipients: [];
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = State;
type ContainerActionsAndTypes = AppActions;

interface ContainerActions {
  getList: (from: string, to: string) => void;
}

/* --- Utils --- */
type Line = {
  date: string;
  count: number;
};

type LineChart = {
  listOptins: Line[];
  listRecipients: Line[];
};

export {
  ContainerState,
  ContainerActions,
  ContainerActionsAndTypes,
  Line,
  LineChart,
};
