import { useEffect, useState } from 'react'
import './App.css'
import Conf from './Conf/Conf'
import Recipe from './recipe'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("pasta")

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${Conf.appId}&app_key=${Conf.appKey}`)
      .then((res) => res.json())
      .then((res) => setRecipes(res.hits))
    console.log(recipes)
  }, [query])

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Recipe Nest</h1>
        <form onSubmit={getSearch} className="flex justify-center gap-4">
          <input 
            type="text" 
            value={search} 
            onChange={updateSearch} 
            className="p-2 border border-gray-300 rounded-lg w-1/2 sm:w-1/3"
            placeholder="Search for recipes"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </main>
    </div>
  )
}

export default App
