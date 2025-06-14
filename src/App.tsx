import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Page from "./component/Page"
import Browse from "./page/Browse"
import Buyer from "./page/Buyer"
import Cart from "./page/Cart"
import Error from "./page/Error"
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Order from "./page/Order"
import Seller from "./page/Seller"
import Store from "./page/Store"

const router = createBrowserRouter([
  {
    ErrorBoundary: Error,
    children: [
      { element: <Home />, path: "/" },
      { element: <Buyer />, path: "/buyer" },
      { element: <Seller />, path: "/seller" },
      { element: <Browse />, path: "/browse" },
      { element: <Cart />, path: "/cart" },
      { element: <Store />, path: "/store/:id" },
      { element: <Order />, path: "/order" },
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
