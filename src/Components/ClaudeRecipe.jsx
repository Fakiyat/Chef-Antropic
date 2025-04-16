import React from "react";
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <div>
      <section className="suggested-recipe-container" aria-live="polite">
        <h1>Chef Claude Recommends:</h1>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </section>
    </div>
  );
}
