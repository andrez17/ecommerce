import { useSelector } from "react-redux";
import { Image } from "./Image"
import { Link } from "react-router-dom";

export const Slideshow = (props) => {

    const products = useSelector((state) => state.allProducts.products);
    // const { id, title } = products[0];

    var slideIndex = 1;

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }

    setTimeout(()=>showSlides(), 2000);

    return (
        <div className="slideshow">
            <div class="mySlidesContainer">
                <Link to="/products">
                    {products.map((product, index) => {
                    if (index < 5)
                    return <Image key={index} id={index} image={product.image}/>
                    })
                    }
                </Link> 
                <div className="mySlidesBanner">
                    <h1>Everything you need. In one place.</h1>
                </div>
            </div>           
        </div>
    )
}
