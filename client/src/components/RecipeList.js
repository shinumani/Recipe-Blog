
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./recipelist.css"

const RecipeList = () => {
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
    function updateRecipe(event) {
        var id = event.target.getAttribute("name");
        console.log("in update", id)
        var s = `../updaterecipe/${id}`;
        console.log(s)
        navigate(s, { replace: true })
    }
    function deleteRecipe(event) {
        console.log(event.target.getAttribute("name"))
        axios.post("http://localhost:3008/api/delete", { title: event.target.getAttribute("name") })
            .then((res) => {
                alert("Successfully Deleted");

                navigate("../", { replace: true })

            }
            )
    }

    return (
        <>

            {Data.map((recipe, key) => (
                <div className='recipelist'>
                    <Link  className="l" key={key} to={`/recipelist/${recipe._id}`}>

                        <h2>recipe Title : "{recipe.title}"</h2>
                        <h3>UserName : {recipe.username}</h3>
                    </Link>
                    <button name={recipe._id} onClick={updateRecipe}>Update</button>
                    <button name={recipe.title} onClick={deleteRecipe}>Delete</button>
                </div>




            ))}


        </>
    );
}
export default RecipeList;