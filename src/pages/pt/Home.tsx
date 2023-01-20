import React from 'react'
import Navbar from '../../assets/components/Navbar'
import './styles/Home.css'
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">
        <div className="title">
          <div className="background layer"></div>
          <div className="text layer">Salao</div>
          <div className="table layer"></div>
          <div className="mirror layer"></div>
        </div>
      </div>
    </div>
  )
}
export default Home