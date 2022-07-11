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
const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        style={{ objectFit: "contain" }}
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
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
export default RecipeCard;
