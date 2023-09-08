import React from "react"
import logo from "./clubexcellogo.png"

import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-img">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="club-txt">Club Excel</div>
    </div>
  )
}

export default Navbar
