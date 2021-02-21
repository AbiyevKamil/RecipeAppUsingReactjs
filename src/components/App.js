import '../App.css';
import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';

function App() {
    const API_ID = '0b0614dc';
    const API_KEY = '78af69b2bb006d492d140d6063dd94bf';

    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipe();
    }, [query]);

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
        const data = await response.json();
        setRecipe(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return (
        <div className="App">
            <h3 className={'title'}>Recipe App</h3>
            <form onSubmit={getSearch} action="#" className="search-container">
                <input
                    className={'search-box'}
                    type="text"
                    placeholder={'Search for recipe...'}
                    value={search}
                    onChange={updateSearch}
                />
                <button className={'search-btn'} type={"submit"}>Search</button>
            </form>
            <div className="search-result">
                {
                    recipes.map(recipe => (
                        <Recipe
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
