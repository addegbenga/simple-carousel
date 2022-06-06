class Carousel {
  dom = {
    carouselDimension: { x: 0, y: 0 },
    containers: document.querySelector(".ca-container"),
    container: document.querySelectorAll(".carousel"),
    prevButton: null,
    nextButton: null,
    arraylength: null,
    count: 0,
    transitions: null,
  };

  constructor(dom) {
    this.dom.prevButton = Array.from(dom.children).find(
      (item) => item.classList.contains("prev") && item
    );
    this.dom.nextButton = Array.from(dom.children).find(
      (item) => item.classList.contains("next") && item
    );
    this.dom.carouselDimension = {
      x: this.dom.containers.clientWidth,
      y: this.dom.containers.clientHeight,
    };
    this.dom.arraylength = this.dom.container.length;
    this.initEvents();
    this.initStyles();
  }

  //method to position the dom elements
  initStyles() {
    this.dom.container.forEach((item, indx) => {
      item.style.right = this.dom.carouselDimension.x * indx + "px";
    });
  }

  //method to transition the slider
  initTransitions() {
    const txts = (this.dom.containers.style.transition =
      "transform 0.4s ease-in-out");
  }
  getCurrent() {
    console.log(this.dom.container[this.dom.count]);
  }

  // method to call all the click events
  initEvents() {
    this.dom.prevButton.addEventListener("click", () => {
      this.dom.count--;
      if (this.dom.count < 0) {
        this.dom.count++;
      }
      const transformDivPosition = (this.dom.containers.style.transform =
        "translateX(" + this.dom.carouselDimension.x * this.dom.count + "px)");
      this.initTransitions();
    });
    this.dom.nextButton.addEventListener("click", () => {
      this.dom.count++;
      if (this.dom.count > this.dom.arraylength - 1) {
        this.dom.count--;
      }
      const transformDivPosition = (this.dom.containers.style.transform =
        "translateX(" + this.dom.carouselDimension.x * this.dom.count + "px)");
      this.initTransitions();
    });
  }
}
const test = document.querySelector(".carousel-container");
const myCarousel = new Carousel(test);
console.log(myCarousel);
