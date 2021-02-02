const initalState = {
    ...state,
    todo : {
        title: "",
        description: "Esto es una tarea"
    }
}
functioadn () {
    switch (action.type) {
        case ADD_TOTO:
            return {
                 ...state,
                title: action.payload.title,
                description: action.payload.description
            }
        case DELETE_TODO:
            return {
                ...state,
               title: action.payload.title,
               description: action.payload.description
           }
        default
            return state;
    }
}
export function functioadn()