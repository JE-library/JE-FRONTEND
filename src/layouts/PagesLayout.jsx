import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function PagesLayout({children}) {
  return (<div>
    <Navbar/>
{children}
    <Footer/>
    </div>
  )
}

export default PagesLayout
