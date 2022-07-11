import React from "react";
import Spinner from "../layout/Spinner";
import Grid from "@mui/material/Grid";
function SingleRecipe({ recipe }) {
  if (!recipe) {
    return <Spinner />;
  }
  return (
    <div>
      <h2>{recipe.name}</h2>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src={
              recipe.img
                ? recipe.img
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpYgKX6Na9EAfhKgjLD4iyPugeNE0wggdkw&usqp=CAU"
            }
            alt=""
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}

export default SingleRecipe;
