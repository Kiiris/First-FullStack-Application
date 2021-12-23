import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/getrecipebyid/'
const UPDATE_URL = 'http://localhost:3001/api/recipes/'

const RecipeDetails = (props) => {
const [recipeDetails, setRecipeDetails] = useState({})
const[newReview, setReview] = useState({
    review:''
})

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

const handleReviewinput = (e) => {
    setReview({newReview, [e.target.id]: e.target.value });
  };

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

const editReview = async (e) => {
    e.preventDefault()
    const res = await axios.put(`${UPDATE_URL}${props.match.params.id}`, {"review":newReview.review})

}


    return(
        <div>
            <h1 id="niceheader"> {recipeDetails.food} </h1>
            <h2 id='allneeded'> All You Need To Know...</h2>
            <br/>
            <p className='psections'>{recipeDetails.details}</p>
            <img src={recipeDetails.image}/>
            <div>
                <section className='requirements-section'>
        <article> 
            <h1 id="niceheader">What do We Need?</h1>
        <p className='psections'>{recipeDetails.ingredients}</p>
        <p className='psections'>Cooktime: {recipeDetails.cooktime} minutes</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvX9BG1ztKlzsYYWp6iRJgrE2u4X5g6kS_g&usqp=CAU"/>
            <h1 id="niceheader"> How Do We Prepare?</h1>

                        <p id='allneeded'>{recipeDetails.instructions}</p>
                        <hr/>
                        <article> <h1>What do people have to say?</h1></article>
                        <hr/>
                        <p className="psections"> {recipeDetails.review == "" ? 'Nothing to see here..Would you like to write a review?' : recipeDetails.review}</p>
                        <button className="likebutton" onClick={likeRecipe}><img src={'https://cdn1.iconfinder.com/data/icons/youtuber/256/thumbs-up-like-gesture-512.png'} /></button>
                        <button className="unlikebutton" onClick={unlikeRecipe}><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Font_Awesome_5_regular_thumbs-down.svg/1200px-Font_Awesome_5_regular_thumbs-down.svg.png'}/></button>
                        <br/>
                        <textarea
        className="updatereview"
          onChange={handleReviewinput}
          type="text"
          value={newReview.review}
          placeholder="Add a latest Review!"
          id="review"
          size="100"
        />
        <br/>
                        <button className="errorbutton" onClick={editReview}>Add your Review!</button>
                        <br/>
                        <button className="errorbutton"><nav><Link to={`/updaterecipe/${props.match.params.id}`}>Any Errors? Change it!</Link></nav></button>
                        </article>
                
                    </section>
                  </div>
                  
        </div>
    )
}

export default RecipeDetails