import React from 'react';
import { ChevronRight } from 'lucide-react';

interface RecipeListProps {
  recipes: string[];
  onSelectRecipe: (recipe: string) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Önerilen Tarifler</h2>
      <ul className="space-y-2">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectRecipe(recipe)}
              className="w-full text-left p-3 bg-white rounded shadow hover:bg-gray-50 flex justify-between items-center"
            >
              <span>{recipe}</span>
              <ChevronRight className="text-gray-400" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;