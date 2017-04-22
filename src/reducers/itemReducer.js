/**
 * Created by Cristian on 4/16/2017.
 */
import * as types from '../actions/actionTypes';

export default function itemReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_ITEMS_SUCCESS:
            return action.toDoItems;
        case types.CREATE_ITEM_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.toDoItem)
            ];
        case types.UPDATE_ITEM_SUCCESS:
            return [
                ...state.filter(toDoItem => toDoItem.id !== action.toDoItem.id),
                Object.assign({}, action.toDoItem)
            ];
        default:
            return state;
    }
}
