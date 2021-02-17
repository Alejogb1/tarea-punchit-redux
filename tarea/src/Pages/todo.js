//import {Row, Colm, Form} from "react-bootstrap"
import {connect} from "react-redux"
import { stockData } from "../data"
import { actions } from "../redux/actions/todo"

const Todo = ({dispatch, data: stockData}) => {
    console.log("DATA: ", stockData.data)
    const agregarStock =  (id, ticker, precio, titulo) => {
        
    dispatch({ type: actions.ADD_STOCK, payload: {id, ticker, stockPrice: precio, company: titulo}})
    }
    return (<>
                {
                    
                    stockData.data.length ?
                    stockData.data.map((stock) => (
                        <div>
                            {console.log("XD: "+ stock.company)},
                            <h3>{stock.company}</h3>
                            <p>{stock.ticker}</p>
                            <h5>{stock.stockPrice}</h5>
                            <button onClick={() => agregarStock(stock.id, stock.ticker, stock.stockPrice, stock.company)}>Agregar stock</button>
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