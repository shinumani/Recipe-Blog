
import './recipepage.css'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Recipepage = (props) => {
    const { id } = useParams();
    console.log("Recipe Id", id)
    let [singleRecipe, setSingleRecipe] = useState([]);
    useEffect(() => {
        RecipeData();
    }, []);

    function RecipeData() {
        axios.get("http://localhost:3008/api/view")
            .then((response) => {
                console.log(response.data);
                setSingleRecipe(singleRecipe = response.data.find(i => i._id === id));
                console.log(singleRecipe)
            }
            )
    }

    return (
        < div className='recipepage'>
            <h1>"{singleRecipe.title}"</h1>
            <h3>{singleRecipe.username}</h3>
            <p> {singleRecipe.content}</p>
        </div>
    );
};

export default Recipepage;