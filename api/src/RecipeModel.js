const mongoose = require('mongoose');
let mongooseSchema=mongoose.Schema;
const recipeSchema=new mongooseSchema(
    {
    username:String,
    title:String,
    content:String
}
);
var recipeModelObj=mongoose.model("recipes",recipeSchema);
module.exports={recipeModelObj};