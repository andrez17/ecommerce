import React from 'react'

export const Image = (props) => {
    return (
        <img className="mySlides" key={props.id} src={props.image} /> 
    )
}