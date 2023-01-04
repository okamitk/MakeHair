import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type NavProps={
  user?: string;
}
function Navbar(props: NavProps) {
  return (
    <div>
        <FontAwesomeIcon className='icon' icon="home"></FontAwesomeIcon>
        <FontAwesomeIcon className='icon' icon="phone"></FontAwesomeIcon>
        <FontAwesomeIcon className='icon' icon="message"></FontAwesomeIcon>
        <FontAwesomeIcon className='icon' icon="user"></FontAwesomeIcon>
        <div className="user">
          {props.user}
        </div>
    </div>
  )
}

export default Navbar