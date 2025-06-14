import { enableMapSet } from "immer"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import log from "./lib/log"

globalThis.addEventListener("unhandledrejection", (event) => {
  event.preventDefault()
  log.error("[global]", event)
})

enableMapSet()

const container = document.getElementById("root")
if (!container) {
  throw new Error("Container not found")
}
const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
