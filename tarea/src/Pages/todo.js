//import {Row, Colm, Form} from "react-bootstrap"
import {connect} from "react-redux"
import { stockData } from "../data"
import { actions } from "../redux/actions/todo"

const Todo = ({dispatch, data: stockData}) => {
    console.log("DATA: ", stockData.data)
    /*const deleteActivity =  (id) => {
        dispatch({ type: actions.DELETE_TODO, payload: {id}})
    }*/
    return (<>
                {
                    stockData.data.length ?
                    stockData.data.map((stock) => (
                        <div>
                            <h3>{stock.company}</h3>
                            <p>{stock.ticker}</p>
                            <h5>{stock.stockPrice}</h5>
                        </div>
                    ))
                    : <h4>Ups! No hay stocks</h4>
                }
        </>
    )
} 
function mapStateToProps(state) {
    console.log("state", state)
    return state
}
export default connect(mapStateToProps)(Todo);