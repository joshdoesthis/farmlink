import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Page from "./component/Page"
import Buyer from "./page/Buyer"
import Error from "./page/Error"
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Seller from "./page/Seller"

const router = createBrowserRouter([
  {
    ErrorBoundary: Error,
    children: [
      { element: <Home />, path: "/" },
      { element: <Buyer />, path: "/buyer" },
      { element: <Seller />, path: "/seller" },
      { element: <NotFound />, path: "*" },
      { element: <NotFound />, path: "/notfound" }
    ],
    element: <Page />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
