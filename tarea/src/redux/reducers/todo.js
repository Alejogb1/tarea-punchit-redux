import {actions} from "./../actions/todo"

const initalState = {
    todos: [
        {id: 1, description: "Esto es una tarea", status: false}
    ]
}
export default function todoReducer(state = initalState){
    switch(action.type) {
        case actions.ADD_TODO:
            return {
                ...state,
                todos:  [...state.todos , action.payload.todo ]
            }
        case actions.DELETE_TODO:
            return {
                ...state,
                todos:  state.todos.filter(todo => todo.id !== action.payload.id),
            };
        defualt:
            return state
    }
}