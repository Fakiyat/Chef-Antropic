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
  ));

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g.oregano"
          aria-label="Add ingredient"
          name="ingredient" // add name="ingredient" helps to get the name we put on input field otherwise it says Null
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
}
export default Main;
