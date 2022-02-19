import React from 'react';
import RecipeList from '../components/RecipeList';

import './style.css'

const RecipeListPage = () => (
    <div className="page">
    <h1>Recipes</h1>
    <RecipeList />
    
    </div>
);

export default RecipeListPage;