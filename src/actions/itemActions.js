/**
 * Created by Cristian on 4/16/2017.
 */
import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItemsSuccess(toDoItems) {
  return {type: types.LOAD_ITEMS_SUCCESS, toDoItems};
}
export function createItemSuccess(toDoItem) {
  return {type: types.CREATE_ITEM_SUCCESS, toDoItem};
}

export function updateItemSuccess(toDoItem) {
  return {type: types.UPDATE_ITEM_SUCCESS, toDoItem};
}

export function loadItems() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemApi.getAllItems().then(toDoItems => {
      dispatch(loadItemsSuccess(toDoItems));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveItem(item) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return itemApi.saveItem(item).then(savedItem => {
      item.id ? dispatch(updateItemSuccess(savedItem)) :
        dispatch(createItemSuccess(savedItem));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
