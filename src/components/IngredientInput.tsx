import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface IngredientInputProps {
  onSubmit: (ingredients: string[]) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onSubmit }) => {
  const [ingredient, setIngredient] = useState('');
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredientList([...ingredientList, ingredient.trim()]);
      setIngredient('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredientList.length > 0) {
      onSubmit(ingredientList);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Malzemelerinizi Girin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Bir malzeme girin"
            className="flex-grow p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleAddIngredient}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            <Plus />
          </button>
        </div>
        <ul className="list-disc list-inside">
          {ingredientList.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          Tarifleri Bul
        </button>
      </form>
    </div>
  );
};

export default IngredientInput;