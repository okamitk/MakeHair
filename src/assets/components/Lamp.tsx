import React from 'react'
import './FrameAnimate.js';

const config = {
    dom: document.querySelector("#test"),
    frameNumber: 16,
    delay: 70,
    imgPath: './app-download.png',
    imgWidth: 1280
};
const frame = new FrameAnimate(config);
frame.playForward();

frame.addFrameCallBack(0, function () {
    frame.pause();
    frame.playForward();
});

frame.addFrameCallBack(15, function () {
    frame.pause();
    frame.playBack();
});
function Lamp() {
  return (
    <div>Lamp</div>
  )
}

export default Lamp