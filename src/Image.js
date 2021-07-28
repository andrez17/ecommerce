import React from 'react'

export const Image = (props) => {
    return (
        <img className="mySlides" key={props.id} src={props.image} /> 
        // <img className="mySlides" 
        // src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"/>
    )
}