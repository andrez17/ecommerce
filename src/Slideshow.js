import React from 'react'

export const Slideshow = (props) => {

    var slideIndex = 1;
    let isLoading = true;
    

    const plusDivs = (n) => {
        showDivs(slideIndex += n);
    }

    const showDivs = (n) => {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }

    const createImages = () => {
        return props.products.map(async(product, index) => { 
            if(index < 5)
            var img = document.createElement('img');
            img.src = product.image;
            document.getElementsByClassName("mySlides")[0].appendChild(img);
        })  
    }

    createImages();

    return (
        <div>
            <button class="w3-button w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                <div className="mySlides"></div>
            <button class="w3-button w3-display-right" onClick={() => plusDivs(1)}>&#10095;</button>
        </div>
    )
}
