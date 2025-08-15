import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/Login"
import Browse from "./components/Browse"
import Header from "./components/Header"

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/Browse",
      element : <Browse/>
    }

  ])

  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
