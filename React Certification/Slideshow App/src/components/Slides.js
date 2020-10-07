import React from "react";
// destructure the received props
function Slides({ slides, index, prevSlide, nextSlide, resetSlide }) {
  const item = slides[index];
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          //disable the reset button if the current slide is the first slide
          disabled={index === 0}
          //include onClick handler to reset slide
          onClick={() => resetSlide()}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          //disable the prev button if the current slide is the first slide
          disabled={index === 0}
          //include onClick handler to navigate to previous slide
          onClick={() => prevSlide()}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          //disable the next button if the current slide is the last slide
          disabled={index === slides.length - 1}
          //include onClick handler to navigate to next slide
          onClick={() => nextSlide()}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{item.title}</h1> {/*include item's title*/}
        <p data-testid="text">{item.text}</p> {/*include item's text*/}
      </div>
    </div>
  );
}

export default Slides;
