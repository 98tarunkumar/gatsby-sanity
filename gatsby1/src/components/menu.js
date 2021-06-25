import React from "react"
import Link from "gatsby-link"
function Menu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Menu
