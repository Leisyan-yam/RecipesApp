import { useEffect, useState } from 'react';
import './App.css';
import RecipeComponent from './recipeComponent';
function App() {


const API_ID = "85085476"
const API_KEY = "2137de837e549d4f56e32c711b3905ef"
const [mySearch, setMySearch] = useState('');
const [recipe, setRecipe] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState ('potato');

useEffect( () => {
  getRecipe()
},[wordSubmitted])

const getRecipe = async () => {
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
const result = await response.json();
setRecipe(result.hits)
}

const mySearchWord =(e) => {
 setMySearch(e.target.value)
}
const myWordSubmitted =(e) =>{
  e.preventDefault()
  setWordSubmitted(mySearch)
}

  return (
    <div className="App">
      <div className="header">
      <div className="heading">
        <h1>Let's discover new recipes </h1>
        <div className='container'>
      <form onSubmit={myWordSubmitted}>
      <input className='search' type="text" onChange={mySearchWord} value={mySearch} placeholder="Search ..."/>
      </form>
      <button className='btn'><img src="https://img.icons8.com/sf-regular/48/000000/search.png" alt='icon' className='searchIcon' onClick={myWordSubmitted}/></button>
    </div>
    </div>
    </div>
    <div className="content">
    <div className='recipes' >
    {recipe.map((Element, i)=> (
     <RecipeComponent 
     label = {Element.recipe.label}
     image = {Element.recipe.image}
     igredient = {Element.recipe.ingredientLines}
     link = {Element.recipe.url}
     key = {i}
     /> 
    ))}
    </div>
    </div>
    </div>
  );
}
export default App;
