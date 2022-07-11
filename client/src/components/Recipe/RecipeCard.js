import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteRecipe } from "../../actions/recipe";
import { connect } from "react-redux";
const RecipeCard = ({ recipe, deleteRecipe }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete ?")) {
      deleteRecipe(id);
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        style={{ objectFit: "contain" }}
        onClick={() => navigate(`/dashboard/${recipe._id}`)}
        image={
          recipe.img
            ? recipe.img
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpYgKX6Na9EAfhKgjLD4iyPugeNE0wggdkw&usqp=CAU"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <EditIcon onClick={() => navigate(`/edit-recipe/${recipe._id}`)} />
        </Button>
        <Button size="small">
          <DeleteIcon onClick={() => handleDelete(recipe._id)} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(null, { deleteRecipe })(RecipeCard);
