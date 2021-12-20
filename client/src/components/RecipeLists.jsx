import React from 'react'
import axios from 'axios'
const DELETE_URL = 'http://localhost:3001/api/recipes/'

const RecipeList = (props) => {


    return(
        <div>
            <div className="menu-container"onClick={props.onClick}>
                <h2>{props.food}</h2>
                <p>{props.details}</p>
                <article className='imageList'><img src={props.image} className='recipeimage' alt={props.name} /></article>
                <button className='DELETEbutton'>DELETE Recipe</button>

            </div>
        </div>
    )
}

export default RecipeList