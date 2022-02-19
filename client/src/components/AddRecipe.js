import React from 'react';
import "./addrecipe.css";
import axios from 'axios';
import MyForm from './DbForm';
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
    let navigate = useNavigate();
    var [myvalue, setmyValue] = MyForm({ username: "", title: "", content: "" })
    const addRecipes = () => {
        console.log(myvalue)
        axios.post("http://localhost:3008/api/add", myvalue).then(
            (res) => {
                alert("Successfully Added Recipe")
                navigate("../recipelist", { replace: true })
                console.log("in axios post" + res.data)

            }
        )
    }
    return (

        <div className="container">
            <div className="row">
                <h1>Add New Recipe</h1>
            </div>
            <div className="row">
                <h4><center>Add Your Exclusive Recipes here !!!!!</center></h4>
            </div>
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input type="text" required name="username" value={myvalue.username} onChange={setmyValue} />
                        <label>Username</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input type="text" required name="title" value={myvalue.title} onChange={setmyValue} />
                        <label>Recipe Title</label>
                    </div>
                </div>

                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required name="content" value={myvalue.content} onChange={setmyValue}></textarea>
                        <label>Recipe Instructions</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="btn-lrg submit-btn" onClick={addRecipes}>Add Recipe</div>
                </div>
            </div>
        </div>

    );
};

export default AddRecipe;