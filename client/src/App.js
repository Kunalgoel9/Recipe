import "./App.css";
import NavBar from "./components/AppBar/AppBar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./components/Recipe/CreateRecipe";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";
import setAuthtoken from "./utils/setAuthToken";
import EditRecipe from "./components/Recipe/EditRecipe";
import Main from "./components/Recipe/Main";
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
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
