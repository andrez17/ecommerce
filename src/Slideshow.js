import {Image} from "./Image"

export const Slideshow = (props) => {

    var slideIndex = 1;

    const plusDivs = (n) => {
        showDivs(slideIndex += n);
    }

    const showDivs = (n) => {
        var i;
        let x = document.getElementsByClassName('mySlides');
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        // if(x[slideIndex-1] === undefined){
        //     console.log('No')
        // }
        x[slideIndex-1].style.display = "block";
    }

    setTimeout(()=>showDivs(slideIndex), 750)

    return (
        <div className="slideshow">
            <button class="w3-button w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                <div className="mySlidesContainer">
                    {props.products.map((product, index) => {
                    if (index < 5)
                    return <Image key={index} id={index} image={product.image}/>
                    })
                    }
                    <div className="mySlidesBanner">
                        <h1>Everything you need. In one place.</h1>
                    </div>
                </div>
                
            <button class="w3-button w3-display-right" onClick={() => plusDivs(1)}>&#10095;</button>
        </div>
    )
}
