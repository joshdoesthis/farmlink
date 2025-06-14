import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Page from "./component/Page"
import Error from "./page/Error"
import Home from "./page/Home"
import NotFound from "./page/NotFound"

const router = createBrowserRouter([
  {
    ErrorBoundary: Error,
    children: [
      { element: <Home />, path: "/" },
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
