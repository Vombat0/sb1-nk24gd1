import React, { useState } from 'react';
import { ChefHat, Search } from 'lucide-react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { suggestRecipes, getRecipeDetails } from './services/geminiService';

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [recipeDetails, setRecipeDetails] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleIngredientSubmit = async (ingredientList: string[]) => {
    setIngredients(ingredientList);
    setLoading(true);
    try {
      const suggestedRecipes = await suggestRecipes(ingredientList);
      setRecipes(suggestedRecipes);
    } catch (error) {
      console.error('Tarif önerme hatası:', error);
    }
    setLoading(false);
  };

  const handleRecipeSelect = async (recipe: string) => {
    setSelectedRecipe(recipe);
    setLoading(true);
    try {
      const details = await getRecipeDetails(recipe);
      setRecipeDetails(details);
    } catch (error) {
      console.error('Tarif detayları getirme hatası:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-600 flex items-center justify-center">
          <ChefHat className="mr-2" />
          Yemek Tarifi Öneri Uygulaması
        </h1>
      </header>
      <main className="max-w-4xl mx-auto">
        <IngredientInput onSubmit={handleIngredientSubmit} />
        {loading && (
          <div className="text-center my-4">
            <Search className="animate-spin h-8 w-8 text-indigo-600 mx-auto" />
            <p className="mt-2 text-gray-600">Tarifler aranıyor...</p>
          </div>
        )}
        {recipes.length > 0 && (
          <RecipeList recipes={recipes} onSelectRecipe={handleRecipeSelect} />
        )}
        {selectedRecipe && recipeDetails && (
          <RecipeDetails recipe={selectedRecipe} details={recipeDetails} />
        )}
      </main>
    </div>
  );
}

export default App;