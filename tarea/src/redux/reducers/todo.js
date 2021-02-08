import {actions} from "./../actions/todo"
import { stockData } from "../../data"

const initialState = {
     data: stockData
    
}
export default function todoReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case actions.ADD_TODO:
        return {
          ...state,
          data: [action.payload.todo, ...state.data],
        };
  
      case actions.DELETE_TODO:
        return {
          ...state,
          data: state.data.filter((todo) => todo.id !== action.payload.id),
        };
      default:
        return state;
    }
  }