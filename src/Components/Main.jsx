// const ingredients = ["Tamatoo", "Onion", "Oregano"];
// const ingredientListItems = ingredients.map((ingredient) => (
//   <li key={ingredient}>{ingredient}</li>
// ));
// // console.log(ingredient);

// //adding (submiting) new items to the array of list items when i do write some input, and when i click a button
// function handleSubmit(event) {
//   //   console.log("form subbmitted!");
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const newIngridernt = formData.get("ingredient");
//   ingredients.push(newIngridernt);
//   console.log(ingredients);
// }
import React from "react";
function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  )); // helps the new ingrendient to be added as a list items

  // function handleSubmit(event) {
  //   event.preventDefault();// prevents the page from refreshing

  //   const formData = new FormData(event.currentTarget);//helps to get the data from the form data
  //   const newIngredient = formData.get("ingredient");//helps to get the name when we write on the input field
  //   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); //helps to add the new ingredient to the list  of ingredients
  // }
  //or we can write this and in return we have to write Action instead of in onSubmit
  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient"); //helps to get the name when we write on the input field
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); //helps to add the new ingredient to the list  of ingredients
  }

  return (
    <main>
      <form action={addIngredients} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g.oregano"
          aria-label="Add ingredient"
          name="ingredient" // add name="ingredient" helps to get the name we put on input field otherwise it says Null
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h1>Ingredients on hand:</h1>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientListItems}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      )}
    </main>
  );
}
export default Main;
