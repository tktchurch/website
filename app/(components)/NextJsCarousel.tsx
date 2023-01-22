import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousels, CarouselsDatum} from "../../typings";
import {Carousel} from "react-responsive-carousel";


const fetchHomeCarousel = async () => {
    const res = await fetch("https://tktchurch.amazon.secure-server.net.in/items/carousels");
    const carouselRes: Carousels = await res.json()
    return carouselRes;
}

async function NextJsCarousel() {
        const  data  = await fetchHomeCarousel();
        return (
                <div>
                    {
                    data.data.map((carousel) => (
                        <div key={carousel.id}>
                            <img src={carousel.imgUrl} alt={carousel.imgAlt}/>
                        </div>
                    ))
                }
                </div>
        );
}

export default NextJsCarousel;
