import { GoogleGenerativeAI } from "@google/generative-ai";

// API anahtarınızı buraya yerleştirin
const API_KEY = "AIzaSyB581GFNZTs2ae1D9smOO_OzaYuSh_2Z1c";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function suggestRecipes(ingredients: string[]): Promise<string[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `Şu malzemeler verildiğinde: ${ingredients.join(', ')}, yapılabilecek 5 tarif önerin. Sadece tariflerin isimlerini, her biri yeni bir satırda olacak şekilde verin.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text.split('\n').filter(recipe => recipe.trim() !== '');
}

export async function getRecipeDetails(recipe: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `${recipe} için detaylı bir tarif verin. Malzemeleri, yapılış talimatlarını ve varsa yararlı ipuçlarını içerin.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}