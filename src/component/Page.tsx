import { Outlet, ScrollRestoration } from "react-router-dom"

const Component = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export default Component
