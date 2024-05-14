const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "tunedModels/jurixpro-t3nmzftu6av2";
const API_KEY = "AIzaSyDjdyO7Y6QUwWox5kJ3G_RuEFaYNWcGy2Y";

async function run() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 0,
    topP: 1,
    maxOutputTokens: 8192,
  };

  const safetySettings = [];

  const parts = [{ text: "input: " }];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());
}

run();
