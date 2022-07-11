import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/AppBar/AppBar";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
