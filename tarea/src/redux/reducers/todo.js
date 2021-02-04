import {actions} from "./../actions/todo"

const initialState = {
    autor: "Tu mama",
    todos: [
        {id: 1, description: "Esto es una tarea", status: false}
    ]
}
export default function todoReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case actions.ADD_TODO:
        return {
          ...state,
          todos: [action.payload.todo, ...state.todos],
        };
  
      case actions.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      default:
        return state;
    }
  }