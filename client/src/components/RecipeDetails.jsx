import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/getrecipebyid/'
const UPDATE_URL = 'http://localhost:3001/api/recipes/'

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

const likeRecipe = async (e) => {
    e.preventDefault()
    console.log(UPDATE_URL, props.match.params.id)
    //{liked:true}
    const res = await axios.put(`${UPDATE_URL}${props.match.params.id}`, {"liked":true})
}
const unlikeRecipe = async (e) => {
    e.preventDefault()
    const res = await axios.put(`${UPDATE_URL}${props.match.params.id}`, {"liked":false})
}
const isHealthy = async (e) => {
    e.preventDefault()
    const res = await axios.put(`${UPDATE_URL}${props.match.params.id}`, {"healthy":true})
}
const isnotHealthy = async (e) => {
    e.preventDefault()
    const res = await axios.put(`${UPDATE_URL}${props.match.params.id}`, {"healthy":false})

}


    return(
        <div>
            <h1> {recipeDetails.food} </h1>
            <h2> All you need to know..</h2>
            <p>{recipeDetails.details}</p>
            <img src={recipeDetails.image}/>
            <div>
                <section className='requirements-section'>
        <article> 
        <p>{recipeDetails.ingredients}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmv8q0ycqV1omIJ3cj653JEJRMq7-vlpHbQ&usqp=CAU"/>

                        <p>{recipeDetails.instructions}</p>
                        <article> <h1>What do people have to say?</h1></article>
                        <p> {recipeDetails.review}</p>
                        <button className="likebutton" onClick={likeRecipe}><img src={'https://cdn1.iconfinder.com/data/icons/youtuber/256/thumbs-up-like-gesture-512.png'} /></button>
                        <button className="unlikebutton" onClick={unlikeRecipe}><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Font_Awesome_5_regular_thumbs-down.svg/1200px-Font_Awesome_5_regular_thumbs-down.svg.png'}/></button>
                        <li> {recipeDetails.healthy === true ? 'This is a healthy meal!' : null}</li>
                        <button onClick={isHealthy}>Is this a healthy meal?</button>
                        <button onClick={isnotHealthy}>Not so much</button>
                        <button className="errorbutton"><nav><Link to={`/updaterecipe/${props.match.params.id}`}>Any Errors? Change it!</Link></nav></button>
                        </article>
                
                    </section>
                  </div>
                  
        </div>
    )
}

export default RecipeDetails