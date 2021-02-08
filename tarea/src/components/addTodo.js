import {Col, Form} from "react-bootstrap"
import {connect} from "react-redux"
import {nanoid} from "nanoid/non-secure"
const addTodo = ({dispatch}) =>  {
    function addTask (e) {
        e.preventDefault();
        const [description] = e.target
        const obj = {
            id: nanoid(),
            description: description.value,
            status: false
        }
        dispatch({type: "ADD_TODO", payload: {todo: obj} })
    }
    return (
        <Col>
            <Form onSubmit={addTask}>
                <input placeholder="Escibe una nueva tarea"></input>
                <button type="submit"></button>
            </Form>
        </Col>
    )
}
const mapStateToProps = (state) => {
    return state;
  };
  
  export default connect(mapStateToProps)(addTodo);
