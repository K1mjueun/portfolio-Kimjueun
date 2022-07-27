// start page2
const startPage2 = document.querySelector('#start-2');

const inStartPage2 = {
 myPhoto : document.querySelector("#start-2 > .portfolio-text > .my-photo"),
 arrow1 : document.querySelector("#start-2 > .arrow-1"),
 clickText2 : startPage2.children[4]
}

shaking(inStartPage2.myPhoto,photoMoving,photoMovingTime);

displayChange(inStartPage1.myPhotoHide, startPage1, startPage2);

mouseOverLeave(inStartPage2.myPhoto,inStartPage2.arrow1);
mouseOverLeave(inStartPage2.myPhoto,inStartPage2.clickText2);