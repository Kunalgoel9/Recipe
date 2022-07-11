import React, { useEffect } from "react";
import { getRecipes } from "../../actions/recipe";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import RecipeCard from "./RecipeCard";
import Spinner from "../layout/Spinner";
function Main({ recipes, getRecipes }) {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);
  if (!recipes) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <h1>Recipes</h1>
      <Grid container spacing={2}>
        {recipes &&
          recipes.map((recipe) => (
            <Grid item key={recipe._id} xs={12} md={4} lg={3}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});
export default connect(mapStateToProps, { getRecipes })(Main);
