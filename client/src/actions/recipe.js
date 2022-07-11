import axios from "axios";
import setAlert from "./alert";
import {
  GET_RECIPES,
  RECIPE_ERROR,
  DELETE_RECIPE,
  ADD_RECIPE,
  GET_RECIPE,
  UPDATE_RECIPE,
  SET_DEFAULT_RECIPE,
} from "./types";

export const getRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/recipe");

    dispatch({
      type: GET_RECIPES,
      payload: res.data,
    });
    dispatch({
      type: SET_DEFAULT_RECIPE,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/recipes/${id}`);

    dispatch({
      type: DELETE_RECIPE,
      payload: id,
    });
    dispatch(setAlert("Recipe deleted", "success"));
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const addRecipe = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/recipe", formData, config);

    dispatch({
      type: ADD_RECIPE,
      payload: res.data,
    });
    dispatch(setAlert("Recipe Added", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: RECIPE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
export const updateRecipe = (formData, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(`/api/recipe/${id}`, formData, config);

    dispatch({
      type: UPDATE_RECIPE,
      payload: res.data,
    });
    dispatch(setAlert("Recipe Updated", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: RECIPE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
export const getRecipe = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/recipe/${id}`);

    dispatch({
      type: GET_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
