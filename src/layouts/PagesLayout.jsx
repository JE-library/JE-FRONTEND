import Footer from "../components/footer"
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