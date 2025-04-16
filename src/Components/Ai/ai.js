import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

// Make sure you set an environment variable in Scrimba
// for HF_ACCESS_TOKEN

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    if (!response || !response.choices || !response.choices[0]) {
      throw new Error("No valid response from AI");
    }
    return response.choices[0].message.content;
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Oops! Couldn't fetch a recipe right now. Please try again.";
  }
}

// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

// export async function testHuggingFace() {
//   try {
//     const result = await hf.textGeneration({
//       model: "gpt2",
//       inputs: "Hello, I'm a frontend dev and I love",
//     });
//     console.log(result.generated_text);
//   } catch (err) {
//     console.error("❌ Error:", err.message);
//   }
// }

// testHuggingFace();
