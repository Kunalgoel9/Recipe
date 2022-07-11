import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Recipe.css";
import { updateRecipe, getRecipe } from "../../actions/recipe";
import { useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
function EditRecipe({ updateRecipe, getRecipe, recipe }) {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState([""]);

  const [steps, setSteps] = useState([""]);

  const [name, setName] = useState("");

  const [img, setImg] = useState("");

  const [description, setDescription] = useState("");

  const handleIngChange = (e, index) => {
    setIngredients(...ingredients.map((ing) => (ing[index] = e.target.value)));
  };
  const handleStepChange = (e, index) => {
    setSteps(...steps.map((step) => (step[index] = e.target.value)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = JSON.stringify({
      name,
      img,
      ingredients,
      steps,
      description,
    });
    updateRecipe(formData, id);
    setName("");

    setDescription("");
    setSteps([""]);
    setIngredients([""]);
    setImg("");
  };
  useEffect(() => {
    getRecipe(id);
    if (recipe) {
      setName(recipe.name);
      setDescription(recipe.description);
      setSteps(recipe.steps);
      setIngredients(recipe.ingredients);
      setImg(recipe.img ? recipe.img : "");
    }
  }, [recipe]);

  if (!recipe) {
    return <Spinner />;
  }

  return (
    <div
      className="post-form"
      style={{ height: "800px", width: "70%", margin: "auto" }}
    >
      <div className="bg-primary p">
        <h3>Edit Recipe </h3>
      </div>
      <form className="form my-1">
        <div>
          <TextField
            id="standard-basic"
            label="Add Name"
            type="text"
            sx={{ width: "100%", margin: "1em auto" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Add Image Url"
            value={img}
            sx={{ width: "100%", margin: "1em auto" }}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Add Description"
            value={description}
            sx={{ width: "100%", margin: "1em auto" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          {ingredients.map(
            (ing, index) =>
              ing !== "" && (
                <div>
                  <TextField
                    id="standard-basic"
                    label="Add Ingredient"
                    value={ing}
                    sx={{ width: "100%", margin: "1em auto" }}
                    onChange={(e) => handleIngChange(e, index)}
                  />
                </div>
              ),
          )}
        </div>
        {steps.map(
          (currstep, index) =>
            currstep !== "" && (
              <div>
                <TextField
                  id="standard-basic"
                  label="Add Step"
                  value={currstep}
                  sx={{ width: "100%", margin: "1em auto" }}
                  onChange={(e) => handleStepChange(e, index)}
                />
              </div>
            ),
        )}

        <Button
          className="btn"
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
});
export default connect(mapStateToProps, { updateRecipe, getRecipe })(
  EditRecipe,
);
