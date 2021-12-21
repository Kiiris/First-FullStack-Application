import React, {useState} from 'react'
import axios from 'axios'
const DELETE_URL = 'http://localhost:3001/api/recipes/'

const RecipeList = (props) => {
// const [allRecipes, setAllRecipes] = useState[{props}]
// console.log(props)
console.log(props._id)
    const deleteRecipe = async (e) => {
        e.preventDefault()
        // console.log(DELETE_URL, props.match.id)
        const res = await axios.delete(`${DELETE_URL}${props._id}`)
    }

    return(
        <div>
            <div className="menu-container"onClick={props.onClick}>
                <h2>{props.food}</h2>
                <p>{props.details}</p>
                <article className='imageList'><img src={props.image} className='recipeimage' alt={props.name} /></article>
                <button onClick={deleteRecipe}className='DELETEbutton'>DELETE Recipe</button>

            </div>
        </div>
    )
}

export default RecipeList