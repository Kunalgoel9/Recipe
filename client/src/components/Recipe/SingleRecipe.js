import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DoneIcon from "@mui/icons-material/Done";
import { getRecipe } from "../../actions/recipe";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
function SingleRecipe({ recipe, getRecipe }) {
  const { id } = useParams();

  useEffect(() => {
    getRecipe(id);
  }, [getRecipe]);

  if (!recipe) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <h2>{recipe.name}</h2>

      <Grid container spacing={2} style={{ margin: "1em auto" }}>
        <Grid item xs={12} md={6} lg={6}>
          <img
            src={
              recipe.img
                ? recipe.img
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpYgKX6Na9EAfhKgjLD4iyPugeNE0wggdkw&usqp=CAU"
            }
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <h3>Ingredients</h3>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              bgcolor: "background.paper",
            }}
          >
            {recipe.ingredients.map(
              (ing) =>
                ing !== "" && (
                  <ListItem style={{ verticalAlign: "top" }}>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ing} />
                  </ListItem>
                ),
            )}
          </List>
        </Grid>
      </Grid>
      <h2>Steps</h2>
      {recipe.steps.map((step, index) => (
        <p>{step}</p>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
});

export default connect(mapStateToProps, { getRecipe })(SingleRecipe);
