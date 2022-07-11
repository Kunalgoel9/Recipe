import {
  GET_RECIPES,
  RECIPE_ERROR,
  DELETE_RECIPE,
  ADD_RECIPE,
  GET_RECIPE,
  UPDATE_RECIPE,
  SET_DEFAULT_RECIPE,
} from "../actions/types";

const initialState = {
  recipes: [],
  recipe: null,
  loading: true,
  error: {},
};

export default function recipe(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    case GET_RECIPE:
    case UPDATE_RECIPE:
      return {
        ...state,
        recipe: payload,
        loading: false,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [payload, ...state.recipes],
        loading: false,
      };

    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe._id !== payload),
        loading: false,
      };
    case SET_DEFAULT_RECIPE:
      return {
        ...state,
        recipe: null,
        loading: false,
      };
    case RECIPE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
