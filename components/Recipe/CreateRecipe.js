import { connect } from "mongoose";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function CreateRecipe({ recipe }) {
  const [ingredients, setIngredients] = useState([]);

  const [steps, setSteps] = useState([]);

  const [name, setName] = useState("");

  const [img, setImg] = useState("");

  const [description, setDescription] = useState("");

  const handleIngChange = (e, index) => {
    setIngredients(...ingredients.map((ing) => (ing[index] = e.target.value)));
  };

  const handleAddIng = (ing) => {
    setIngredients([...ingredients, ing]);
  };

  const handleStepChange = (e, index) => {
    setSteps(...steps.map((step) => (step[index] = e.target.value)));
  };

  const handleAddStep = (step) => {
    setSteps([...steps, step]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, img, ingredients, steps, description });
  };
  if (recipe) {
    console.log(recipe);
  }

  return (
    <div className="post-form" style={{ height: "750px", background: "red" }}>
      {/* <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1">
        <TextField
          id="standard-basic"
          label="Add Step"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Add Step"
          variant="standard"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Add Step"
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {ingredients.length > 0 ? (
          ingredients.map((ing, index) => (
            <div>
              <TextField
                id="standard-basic"
                label="Add Ingredient"
                variant="standard"
                value={ing}
                onChange={(e) => handleIngChange(e, index)}
              />
              <Button onClick={() => handleAddIng(ing)}>Add</Button>
            </div>
          ))
        ) : (
          <TextField
            id="standard-basic"
            label="Add Ingredient"
            variant="standard"
            onChange={(e) => handleIngChange(e, 0)}
          />
        )}
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <div>
              <TextField
                id="standard-basic"
                label="Add Step"
                variant="standard"
                value={step}
                onChange={(e) => handleStepChange(e, index)}
              />
              <Button onClick={() => handleAddStep(step)}>Add</Button>
            </div>
          ))
        ) : (
          <TextField
            id="standard-basic"
            label="Add Step"
            variant="standard"
            onChange={(e) => handleStepChange(e, 0)}
          />
        )}

        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </form> */}
      <h1>Hello</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
});
export default connect(mapStateToProps)(CreateRecipe);
