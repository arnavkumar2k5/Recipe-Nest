import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className='text-left'>
      <p className="text-gray-600 mb-4">Calories: {calories}</p>
      <ul className="list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-800">{ingredient.text}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Recipe
