import { Outlet } from "react-router-dom"
import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"


function MainLayout() {
  return (
    <div className="bg-[#E7E7E3] md:px-14 px-4 py-8">
    <Navbar />
    <main className="min-h-[calc(100vh-65px-80px)]">
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default MainLayout