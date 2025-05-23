import React from "react";

export default function IngredientsList(props) {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  )); // helps the new ingrendient to be added as a list items

  return (
    <div>
      <section>
        <h1 className="title-name">Ingredients on hand:</h1>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientListItems}
        </ul>
        {/* Same condition if there are atleast 4 items in list them the generate recipe will render there should be minimum of 4 list items to render */}
        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div ref={props.useRef}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    </div>
  );
}
