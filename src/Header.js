import React from 'react'

export default function Header(props) {
  return (
    <>
      <nav className="navbarbg-body-tertiary" style={{backgroundColor:'black',color:'white'}}>
  <div className="container-fluid">
    <span className="navbar-text" style={{fontSize:'30px'}}>
      Welcome to our CRUD Application...
    </span>
  </div>
</nav>
    </>
  )
}
