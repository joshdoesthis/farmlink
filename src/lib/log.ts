const { VITE_LOG_LEVEL } = import.meta.env
if (!VITE_LOG_LEVEL) {
  throw new Error("VITE_LOG_LEVEL is not set")
}
if (
  VITE_LOG_LEVEL !== "debug" &&
  VITE_LOG_LEVEL !== "info" &&
  VITE_LOG_LEVEL !== "warn" &&
  VITE_LOG_LEVEL !== "error"
) {
  throw new Error("VITE_LOG_LEVEL must be one of debug, info, warn, error")
}

const log_level = { debug: 0, error: 3, info: 1, warn: 2 }

const log = (level: "debug" | "info" | "warn" | "error", message: string, ...args: unknown[]) => {
  if (log_level[level] >= log_level[VITE_LOG_LEVEL]) {
    console[level](`[${level}] ${message}`, ...args)
  }
}

const debug = (message: string, ...args: unknown[]) => {
  log("debug", message, ...args)
}
const error = (message: string, ...args: unknown[]) => {
  log("error", message, ...args)
}
const info = (message: string, ...args: unknown[]) => {
  log("info", message, ...args)
}
const warn = (message: string, ...args: unknown[]) => {
  log("warn", message, ...args)
}

log("info", "Log level", VITE_LOG_LEVEL)

export default { debug, error, info, warn }
