import { useSelector } from "react-redux";
import { Image } from "./Image"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const Slideshow = (props) => {
    const products = useSelector((state) => state.allProducts.products);
    var slides = document.getElementsByClassName("mySlides");

    useEffect(() => {
        if(slides.length > 0){
            showSlides(); 
        }

    }, [products])

    var slideIndex = 1;

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if(slides.length > 0){
            console.log(slides)
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            console.log(slideIndex-1);
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }  
      }

    return (
        <div className="slideshow">
            <div class="mySlidesContainer">
                <Link to="/products">
                    {products.map((product, index) => {
                    if (index < 5)
                    return <img className="mySlides" key={product.id} src={product.image}/>
                    })
                    }
                </Link> 
                <div className="mySlidesBanner">
                    <h1>ALLTHE merch</h1>
                </div>
            </div>           
        </div>
    )
}
