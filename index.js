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
      x: this.dom.container[0].clientWidth,
      y: this.dom.container[0].clientHeight,
    };
    this.dom.arraylength = this.dom.container.length;
    this.initEvents();
    this.initStyles();
  }
  initStyles() {
    this.dom.container.forEach((item, indx) => {
      item.style.left = this.dom.carouselDimension.x * indx + "px";
    });
  }
  initTransitions() {
    const txts = (this.dom.containers.style.transition =
      "transform 0.4s ease-in-out");
  }
  getCurrent() {
    console.log(this.dom.container[this.dom.count]);
  }
  initEvents() {
    this.dom.prevButton.addEventListener("click", () => {
      this.dom.count--;
      console.log(this.dom.count);
      const txt = (this.dom.containers.style.transform =
        "translateX(" + this.dom.carouselDimension.x * this.dom.count + "px)");
      this.initTransitions();
    });
    this.dom.nextButton.addEventListener("click", () => {
      this.dom.count++;

      const txt = (this.dom.containers.style.transform =
        "translateX(" + this.dom.carouselDimension.x * this.dom.count + "px)");
      this.initTransitions();
      console.log(this.dom.count);
    });
  }
}
const test = document.querySelector(".carousel-container");
const myCarousel = new Carousel(test);
console.log(myCarousel);
