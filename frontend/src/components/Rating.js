import React from "react"

export default function Rating(props){

    const Ratings = () => {
        for(let i=1; i<props.rating; i++){
            return (
                <i className="fa-solid fa-star"></i> 
            )
        }
    }

    return (
        <div className="rating">
            {/* <Ratings /> */}
            <span>
                <i style={{color: props.color}} className={props.rating >= 1 ? 'fa-solid fa-star' : props.rating >= 0.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'}  ></i>  
                <i style={{color: props.color}} className={props.rating >= 2 ? 'fa-solid fa-star' : props.rating >= 1.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'} ></i>                 
                <i style={{color: props.color}} className={props.rating >= 3 ? 'fa-solid fa-star' : props.rating >= 2.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'} ></i> 
                <i style={{color: props.color}} className={props.rating >= 4 ? 'fa-solid fa-star' : props.rating >= 3.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'} ></i> 
                <i style={{color: props.color}} className={props.rating >= 5 ? 'fa-solid fa-star' : props.rating >= 4.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'} ></i> 
                 {props.numReviews} Reviews.</span>
        </div>
    )
}