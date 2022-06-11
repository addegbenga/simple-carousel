import { Carousel } from "./carousel";
const carouselContainer = document.querySelector(".carousel-container");
const carouselInnerContainer = document.querySelector(".ca-container");
const carouselImages = document.querySelectorAll(".carousel");

new Carousel(carouselContainer, carouselImages, carouselInnerContainer);
