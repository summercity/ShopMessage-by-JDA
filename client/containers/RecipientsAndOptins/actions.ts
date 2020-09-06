import { action } from "typesafe-actions";
import ActionTypes from "./constants";
import { Dispatch } from "redux";

export const getListOptinsSucess = (data: any) =>
  action(ActionTypes.GET_LIST_OPTINS_SUCCESS, data);

export const getListRecipientsSucess = (data: any) =>
  action(ActionTypes.GET_LIST_RECIPIENTS_SUCCESS, data);

export const getListFail = (data: any) =>
  action(ActionTypes.GET_LIST_FAIL, data);

export const getListData = (from: string, to: string) =>
  action(ActionTypes.GET_LIST_METHOD, from, to);

export const getList = (from: string, to: string) => {
  // We can separate this calls if needed.
  return (dispatch: Dispatch) => {
    try {
      fetch(
        `http://localhost:5000/api/reports/optins.json?from=${from}&to=${to}`
      )
        .then((res) => res.json())
        .then(
          (data) => dispatch(getListOptinsSucess(data)),
          (e) => dispatch(getListFail(e))
        );
      fetch(
        `http://localhost:5000/api/reports/recipients.json?from=${from}&to=${to}`
      )
        .then((res) => res.json())
        .then(
          (data) => dispatch(getListRecipientsSucess(data)),
          (e) => dispatch(getListFail(e))
        );
    } catch (e) {
      dispatch(getListFail(e));
    }
  };
};
