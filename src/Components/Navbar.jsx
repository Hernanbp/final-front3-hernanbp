import React from "react"
import { Link, Outlet } from "react-router-dom"
import { routes } from "../routes"
import { useGlobalStates } from "./utils/global.context"

const Navbar = () => {
  const { dispatch } = useGlobalStates()

  const handleChangeTheme = () => {
    dispatch()
  }

  return (
    <nav>
      <div className="wrapper">
        <Outlet />
        <p className="alumno">Hernan Barrios Paz - Camada 2 - CTD</p>
        <div className="links">
          <Link to={routes.home}>Home</Link>
          <Link to={routes.contact}>Contact</Link>
          <Link to={routes.favs}>Favorites</Link>
          <button onClick={handleChangeTheme}>Change theme</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
