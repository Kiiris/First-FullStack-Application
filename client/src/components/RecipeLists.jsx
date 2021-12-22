import React, { useState } from 'react'
import axios from 'axios'
const DELETE_URL = 'http://localhost:3001/api/recipes/'

const RecipeList = (props) => {

    const deleteRecipe = async (e) => {
        e.preventDefault()
        const res = await axios.delete(`${DELETE_URL}${props._id}`)
    }

    return(
        <div>
            <div className="menu-container"onClick={props.onClick}>
                <h2>{props.food}</h2>
                <p>{props.details}</p>
                <article className='imageList'><img src={props.image} className='recipeimage' alt={props.name} /></article>
                <button onClick={deleteRecipe}className='DELETEbutton'>DELETE Recipe</button>
                <div>
        </div>

            </div>
        </div>
    )
}

export default RecipeList