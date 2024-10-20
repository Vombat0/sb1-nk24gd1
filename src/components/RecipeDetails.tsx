import React from 'react';

interface RecipeDetailsProps {
  recipe: string;
  details: string;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, details }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{recipe}</h2>
      <div className="prose max-w-none">
        {details.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;