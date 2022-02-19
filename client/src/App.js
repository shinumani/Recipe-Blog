import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';

import Recipepage from './pages/Recipepage';
import RecipeListpage from './pages/RecipeListpage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import AddRecipe from "./components/AddRecipe"
import UpdateRecipe from './components/UpdateRecipe';
import Navbar from './components/Navbar';
import Navbarsmall from "./components/Navbarsmall"
import Navbaruser from "./components/Navbaruser"
import React, { useState } from 'react';
import RecipeListPageUser from './pages/RecipelistpageUser';
import Footer from './components/Footer';
function App() {
  var [loggedin, setloggedin] = useState(0)
  var [loggedout, setloggedout] = useState(0)
  console.log("lin",loggedin)
  console.log("lout",loggedout)
  const setlogin = (l) => {
    setloggedin(l)
  }
  const setlogout = (l) => {
    setloggedout(l)
 //   setloggedin(l)
  }
  if(loggedin===0)
   { return (
     
      <Router>
        
        <div className="App">
        <Navbarsmall setlogout={setlogout}/>
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route path="/signup" element={<SignUp />} ></Route>
            <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
          </Routes>
          
        </div>
        <Footer />
      </Router>
    );}
    else if(loggedin===1)
    {
      return (
        <Router>
          
          <div className="App">
          <Navbaruser setlogout={setlogout}/>
            <Routes>
              <Route path="/" element={<Homepage />} exact></Route>
              
              <Route path="/Recipelist" element={<RecipeListPageUser />} ></Route>
              <Route path="/Recipelist/:id" element={<Recipepage />} ></Route>
              
              <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
              
              
            </Routes>
            
          </div>
          <Footer />
        </Router>
      );
    }
   
    else
    {
      return (
        <Router>
         
          <div className="App">
          <Navbar setlogout={setlogout}/>
            <Routes>
              <Route path="/" element={<Homepage />} exact></Route>
              <Route path="/updateRecipe/:id" element={<UpdateRecipe />} ></Route>
              <Route path="/Recipelist" element={<RecipeListpage />} ></Route>
              <Route path="/Recipelist/:id" element={<Recipepage />} ></Route>
              
              <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
              <Route path="/add" element={<AddRecipe />} ></Route>
              
            </Routes>
            
          </div>
          <Footer />
        </Router>
      );
    }
    
  }


export default App;
