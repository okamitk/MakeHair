import React from 'react';
import './styles/animation.css';
type Animation_props={
  counter: number; //it makes each animation unique in a id list
  scale:number
  top: number;
  left: number;
}

function Animation(props: Animation_props) {
  const styles = {
    animation_wrapper: {
      scale: ((props.scale).toString)+"%",
      top: props.top,
      left: props.left,
    }
  };
  const [backgroundColor, setBackgroundColor] = React.useState('white');
  let id = "animation"+props.counter;
  async function handleMouseOver() {
    document.getElementById(id)?.classList.add("animation");
    document.getElementById(id)?.classList.remove("idle");
    await new Promise(r => setTimeout(r, 500));
    document.getElementById(id)?.classList.add("paused")
  }
  async function handleMouseOut() {
    document.getElementById(id)?.classList.remove("paused")
    await new Promise(r => setTimeout(r, 500));
    document.getElementById(id)?.classList.remove("animation")
    document.getElementById(id)?.classList.add("idle")
  }
  return (
    <div className='animation-wrapper' style={styles.animation_wrapper}>
        <div id={id} className="inactive"></div>
        <div className="hitbox" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></div>
    </div>
  )
};

export default Animation