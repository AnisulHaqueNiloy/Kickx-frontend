import { Outlet } from "react-router-dom"
import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"


function MainLayout() {
  return (
    <div> <Navbar />
    <Outlet />
    <Footer /></div>
  )
}

export default MainLayout