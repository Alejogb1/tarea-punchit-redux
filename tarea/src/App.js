import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store"
import Todo from "./Pages/todo"
import AddTodo from "./components/addTodo"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AddTodo/>
        <Route path="/todos" component={Todo}></Route>
        <Redirect to="/todos"/>
      </Router>
    </Provider>
  );
}

export default App;
