import React from 'react'


const FavoriteList = (props) => {


    return(
        <div>
            <div className="menu-container"onClick={props.onClick}>
                <h2>{props.food}</h2>
                <p>{props.details}</p>
                <article className='imageList'><img src={props.image} className='recipeimage' alt={props.name} /></article>
                <div>
        </div>

            </div>
        </div>
    )
}

export default FavoriteList