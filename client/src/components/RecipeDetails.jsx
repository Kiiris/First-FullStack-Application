import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/getrecipebyid/'

const RecipeDetails = (props) => {
const [recipeDetails, setRecipeDetails] = useState({})


useEffect(()=>{
    let isCancelled = false
    const getRecipeDetails = async () =>{
        const response = await axios.get(`${BASE_URL}${props.match.params.id}`)
    if (!isCancelled){
        setRecipeDetails(response.data.recipes)
    }
    }
    getRecipeDetails()
    return () => {
        isCancelled = true;
    } 
},[])


    return(
        <div>
            <h1> {recipeDetails.food} </h1>
            <p>{recipeDetails.details}</p>
            <img src={recipeDetails.image}/>
            <div>
                <section className='requirements-section'>
                    <h2>
                        All you need to know..
                        </h2>
                        <li> {recipeDetails.food} {recipeDetails.details}</li> 
                        <li> What do people have to say? {recipeDetails.review}</li> 
                        <li> {recipeDetails.healthy === true ? 'This is a healthy meal!' : null}</li>
                        <button><nav><Link to={`/updaterecipe/${props.match.params.id}`}>Any Errors? Change it!</Link></nav></button>
                
                    </section>
                  </div>
                  
        </div>
    )
}

export default RecipeDetails