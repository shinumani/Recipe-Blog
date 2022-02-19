
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./recipelist.css"

const RecipeListUser = () => {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        recipeData();
    }, []);

    function recipeData() {
        axios.get("http://localhost:3008/api/view")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }
    

    return (
        <>

            {Data.map((recipe, key) => (
                <div className='recipelist'>
                    <Link  className="l" key={key} to={`/recipelist/${recipe._id}`}>

                        <h2>Recipe Title : "{recipe.title}"</h2>
                        <h3>UserName : {recipe.username}</h3>
                    </Link>
                    
                </div>




            ))}


        </>
    );
}
export default RecipeListUser;