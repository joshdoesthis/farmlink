import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Page from "./component/Page"
import Browse from "./page/Browse"
import Buyer from "./page/Buyer"
import Cart from "./page/Cart"
import Dashboard from "./page/Dashboard"
import Error from "./page/Error"
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Orders from "./page/Orders"
import Store from "./page/Store"

const router = createBrowserRouter([
  {
    ErrorBoundary: Error,
    children: [
      { element: <Home />, path: "/" },
      { element: <Buyer />, path: "/buyer" },
      { element: <Dashboard />, path: "/dashboard" },
      { element: <Browse />, path: "/browse" },
      { element: <Cart />, path: "/cart" },
      { element: <Store />, path: "/store/:id" },
      { element: <Orders />, path: "/orders" },
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
