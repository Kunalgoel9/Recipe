import "./App.css";
import NavBar from "./components/AppBar/AppBar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./components/Recipe/CreateRecipe";
import Login from "./components/Auth/Login";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";
import setAuthtoken from "./utils/setAuthToken";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  if (localStorage.token) {
    setAuthtoken(localStorage.token);
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
