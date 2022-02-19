
import './AddRecipe'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const UpdateRecipe = (props) => {
    let navigate = useNavigate();

    const { id } = useParams();
    console.log("Recipe Id", id)
    let [singleRecipe, setSingleRecipe] = useState({username:"",title:"",content:""});
    
   //console.log(singleRecipe)
    useEffect(() => {
        recipeData();
    }, []);

    function recipeData() {
        axios.get("http://localhost:3008/api/view")
            .then((response) => {
                //console.log(response.data);
                setSingleRecipe(singleRecipe = response.data.find(i => i._id === id));
               console.log(singleRecipe.content)
               
            }
            )
    }
    function contentChange(e) {
        const { name, value } = e.target; //destructuring
        setSingleRecipe({ ...singleRecipe, [name]: value });
       // setSingleRecipe(singleRecipe.content=e.target.value)
    }
  

    function updateRecipe() {
       
            
            axios.post("http://localhost:3008/api/update",  singleRecipe )
                .then((res) => {
                    alert("Successfully Updated");
                    
                    navigate("../Recipelist", { replace: true })
                   
                }
                )
            
    }

    return (
       

<div className="container">
<div className="row">
    <h1>Update Recipe</h1>
</div>
<div className="row">
    <h4><center>Update Recipe Content Here !!!!!</center></h4>
</div>
<div className="row input-container">
    <div className="col-xs-12">
        <div className="styled-input wide">
            <input type="text" required name="username" value={singleRecipe.username} disabled />
            <label>Username</label>
        </div>
    </div>
    <div className="col-md-6 col-sm-12">
        <div className="styled-input">
            <input type="text" required name="title" value={singleRecipe.title} disabled/>
            <label>Recipe Title</label>
        </div>
    </div>

    <div className="col-xs-12">
        <div className="styled-input wide">
            <textarea required name="content" value={singleRecipe.content} onChange={contentChange}></textarea>
            <label>Recipe Content</label>
        </div>
    </div>
    <div className="col-xs-12">
        <div className="btn-lrg submit-btn" onClick={UpdateRecipe}>Update Recipe</div>
    </div>
</div>
</div>
    );
};

export default UpdateRecipe;