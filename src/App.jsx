
import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import BookForm from './pages/BookForm'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Contacts from './pages/Contacts'



function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/books",
    element:<Books/>
  },
  {
    path: "/book-details/:id",
    element: <BookDetails/>
  },
  {
    path: "/add-book",
    element: <BookForm/>
  },
  {
    path: "/about-us",
    element: <Contacts/>
  }
  

 ])


  return (
   <RouterProvider router={router}/>
  );

}

export default App
