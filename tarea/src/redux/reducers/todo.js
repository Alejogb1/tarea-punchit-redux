import {actions} from "./../actions/todo"
import { stockData } from "../../data"

export const initialState = {
     data: stockData
    
}
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case actions.ADD_STOCK:
        console.log("action payload: ", action.payload)
        return {
          data: [action.payload],
        };
  
      case actions.DELETE_STOCK:
        return {
          ...state,
          data: state.data.filter((todo) => todo.id !== action.payload.id),
        };
      default:
        return state;
    }
  }