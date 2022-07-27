// work-page-bubbleroom
const wpBubbleroom = document.querySelector("#work-page-bubbleroom");
const backBtn2 = document.querySelector("#work-page-bubbleroom>header>.back>.arrow");

displayChange(bubbleroom,mainPage1,wpBubbleroom);
displayChange(backBtn2,wpBubbleroom,mainPage1);

const bubbleroomWorkProBtns = document.querySelector("#work-page-bubbleroom > #board > #work-process");

const contactStamp2 = document.querySelector(".contact-stamp-2");
contactStamp(bubbleroom,contactStamp2);

const leftBtn2 = document.querySelector("#work-page-bubbleroom >  #board > #work-img-slide > .left-button");
const rightBtn2 = document.querySelector("#work-page-bubbleroom >  #board > #work-img-slide > .right-button");

const imgSlideBubbleroom = document.querySelector("#work-page-bubbleroom > #board > #work-img-slide");

const bubbleroomSlides = [
  bubbleroomSlide1 = imgSlideBubbleroom.children[1],
  bubbleroomSlide2 = imgSlideBubbleroom.children[2],
  bubbleroomSlide3 = imgSlideBubbleroom.children[3],
  bubbleroomSlide4 = imgSlideBubbleroom.children[4],
  bubbleroomSlide5 = imgSlideBubbleroom.children[5],
  bubbleroomSlide6 = imgSlideBubbleroom.children[6],
  bubbleroomSlide7 = imgSlideBubbleroom.children[7],
  bubbleroomSlide8 = imgSlideBubbleroom.children[8]
]

bubbleroomSlideControl(bubbleroomSlides);
bubbleroomSlide(leftBtn2,bubbleroomSlides);
bubbleroomSlide(rightBtn2,bubbleroomSlides);