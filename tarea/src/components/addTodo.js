import {Col, Form} from "react-bootstrap"

const addTodo = ({dispatch}) =>  {
    function addTask (e) {
        e.preventDefault();
        [description] 
        obj = {
            title: e.target, 
        }
        dispatch: [todo, actions.payload.ADD_TODO]
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