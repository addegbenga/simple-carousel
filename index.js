class Carousel {
  dom = {
    carouselDimension: { x: 0, y: 0 },
    prevButton: null,
    nextButton: null,
    arraylength: null,
    count: 0,
    transitions: null,
    demo: null,
    demo2: null,
  };

  constructor(dom, container, containers) {
    this.dom.demo = container;
    this.dom.demo2 = containers;

    // this.dom.containers = containers;
    this.dom.prevButton = Array.from(dom.children).find(
      (item) => item.classList.contains("prev") && item
    );
    this.dom.nextButton = Array.from(dom.children).find(
      (item) => item.classList.contains("next") && item
    );
    this.dom.carouselDimension = {
      x: this.dom.demo2.clientWidth,
      y: this.dom.demo2.clientHeight,
    };
    this.dom.arraylength = this.dom.demo.length;
    this.initEvents();
    this.initStyles();
  }

  //method to position the dom elements
  initStyles() {
    this.dom.demo.forEach((item, indx) => {
      item.style.right = this.dom.carouselDimension.x * indx + "px";
    });
  }

  //method to transition the slider
  initTransitions() {
    const txts = (this.dom.demo2.style.transition =
      "transform 0.4s ease-in-out");
  }
  getCurrent() {
    console.log(this.dom.demo[this.dom.count]);
  }

  // method to call all the click events
  initEvents() {
    this.dom.prevButton.addEventListener("click", () => {
      this.dom.count--;
      if (this.dom.count < 0) {
        this.dom.count++;
      }
      const transformDivPosition = (this.dom.demo2.style.transform =
        "translateX(" + this.dom.carouselDimension.x * this.dom.count + "px)");
      this.initTransitions();
    });
    this.dom.nextButton.addEventListener("click", () => {
      this.dom.count++;
      if (this.dom.count > this.dom.arraylength - 1) {
        this.dom.count--;
      }
      const transformDivPosition = (this.dom.demo2.style.transform =
        "translateX(" + this.dom.carouselDimension.x * this.dom.count + "px)");
      this.initTransitions();
    });
  }
}
const carouselContainer = document.querySelector(".carousel-container");
const carouselInnerContainer = document.querySelector(".ca-container");
const carouselImages = document.querySelectorAll(".carousel");
const myCarousel = new Carousel(
  carouselContainer,
  carouselImages,
  carouselInnerContainer
);
console.log(myCarousel);
