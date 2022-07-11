import { connect } from "react-redux";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Recipe.css";
import { addRecipe } from "../../actions/recipe";
function CreateRecipe({ addRecipe }) {
  const [ingredients, setIngredients] = useState([""]);

  const [steps, setSteps] = useState([""]);
  const [ingredient, setIngredient] = useState("");

  const [step, setStep] = useState("");

  const [name, setName] = useState("");

  const [img, setImg] = useState("");

  const [description, setDescription] = useState("");

  // const handleIngChange = (e, index) => {
  //   setIngredients(...ingredients.map((ing) => (ing[index] = e.target.value)));
  // };

  const handleAddIng = () => {
    setIngredients([...ingredients, ingredient]);
    setIngredient("");
  };

  const handleAddStep = () => {
    setSteps([...steps, step]);
    setStep("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, img, ingredients, steps, description });
    var formData = JSON.stringify({
      name,
      img,
      ingredients,
      steps,
      description,
    });
    addRecipe(formData);
    setName("");
    setStep("");
    setIngredient("");
    setDescription("");
    setSteps([""]);
    setIngredients([""]);
    setImg("");
  };

  return (
    <div
      className="post-form"
      style={{ height: "800px", width: "70%", margin: "auto" }}
    >
      <div className="bg-primary p">
        <h3>Add a Recipe </h3>
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
          {ingredients.map((ing, index) => (
            <div>
              <TextField
                id="standard-basic"
                label="Add Ingredient"
                value={ing ? ing : ingredient}
                sx={{ width: "100%", margin: "1em auto" }}
                onChange={(e) => setIngredient(e.target.value)}
              />
              {!ing && (
                <Button
                  className="btn"
                  variant="contained"
                  onClick={() => handleAddIng()}
                >
                  Add
                </Button>
              )}
            </div>
          ))}
        </div>
        {steps.map((currstep, index) => (
          <div>
            <TextField
              id="standard-basic"
              label="Add Step"
              value={currstep ? currstep : step}
              sx={{ width: "100%", margin: "1em auto" }}
              onChange={(e) => setStep(e.target.value)}
            />

            {!currstep && (
              <Button
                className="btn"
                variant="contained"
                onClick={() => handleAddStep()}
              >
                Add
              </Button>
            )}
          </div>
        ))}

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

export default connect(null, { addRecipe })(CreateRecipe);
