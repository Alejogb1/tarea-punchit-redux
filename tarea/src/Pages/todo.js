import {Row, Colm, Form} from "react-bootstrap"
import {connect} from "react-redux"
import { actions } from "../redux/actions/todo"

const Todo = ({todo: {todos}}) => {
    console.log(todos)
    const deleteActivity =  (id) => {
        dispatch({ type: actions.DELETE_TODO, payload: {id}})
    }
    return (<>
                {
                todos ? 
                todos.map((todo) => {
                    <div>
                        <h3>{todo.description}</h3>
                        <button type="button" onClick={() => deleteActivity(todo.id)}>
                            Eliminar
                        </button>
                    </div>
                   
                })
                :  <h5>No hay tarea</h5>
            }        
        </>
    )
} 
const mapStateToProps = (state) => {
    console.log("state", state)
    return state
}
export default connect(mapStateToProps)(Todo);