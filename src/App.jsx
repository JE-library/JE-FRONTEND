
import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import BookForm from './pages/BookForm'
import { createBrowserRouter,RouterProvider } from 'react-router'
import EditForm from './pages/EditForm'
import BookDetails from './pages/BookDetails'


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
    path: "/add-book",
    element: <BookForm/>
  },
  {
    path: "/book-details/:id",
    element: <BookDetails/>
  },
  {
    path: "/edit-book/:id",
    element: <EditForm />
  }
  

 ])


  return (
   <RouterProvider router={router}/>
  );

}

export default App
