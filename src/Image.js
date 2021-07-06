import React from 'react'

export const Image = (props) => {
    return (
        <div>
            <img className="mySlides" key={props.id} src={props.image}/>
        </div>
    )
}