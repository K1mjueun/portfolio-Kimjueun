// start page1
const startPage1 = document.querySelector("#start-1");

const inStartPage1 = {
  myPhotoHide : document.querySelector(".my-photo-hide"),
  arrowGray : document.querySelector(".arrow-gray"),
  clickText : startPage1.children[2]
}

shaking(inStartPage1.myPhotoHide,photoMoving,photoMovingTime);

mouseOverLeave(inStartPage1.myPhotoHide,inStartPage1.arrowGray);
mouseOverLeave(inStartPage1.myPhotoHide,inStartPage1.clickText);
// start page1