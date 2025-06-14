import { UAParser } from "ua-parser-js"

const decode_uint8_array = (payload: Uint8Array) => {
  return new TextDecoder().decode(payload)
}

const encode_uint8_array = (payload: string | object) => {
  if (typeof payload === "string") {
    return new TextEncoder().encode(payload)
  }
  if (typeof payload === "object") {
    return new TextEncoder().encode(JSON.stringify(payload))
  }
  return new Uint8Array()
}

const timeago_interval: { name: string; seconds: number }[] = [
  { name: "year", seconds: 31536000 },
  { name: "month", seconds: 2592000 },
  { name: "day", seconds: 86400 },
  { name: "hour", seconds: 3600 },
  { name: "minute", seconds: 60 },
  { name: "second", seconds: 1 }
]

const parse_timeago: (date?: Date) => string | null = (date) => {
  if (date === undefined) {
    return null
  }
  const now = new Date()
  const then = new Date(date)
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000)
  for (let i = 0; i < timeago_interval.length; i++) {
    const { name, seconds } = timeago_interval[i]
    const value = Math.floor(diff / seconds)
    if (value >= 1) {
      const s = value > 1 ? "s" : ""
      return `${value.toString()} ${name}${s} ago`
    }
  }
  return "Just now"
}

const parse_timestamp: (date?: Date) => string | null = (date) => {
  if (date === undefined) {
    return null
  }
  const d = new Date(date)
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const am_pm = hours >= 12 ? "PM" : "AM"
  const hh = hours % 12
  const mm = minutes
  const dd = d.getDate()
  const MM = d.getMonth() + 1
  const yy = d.getFullYear().toString().slice(-2)
  const dd_padded = dd < 10 ? `0${dd.toString()}` : dd.toString()
  const MM_padded = MM < 10 ? `0${MM.toString()}` : MM.toString()
  const hh_padded = hh < 10 ? `0${hh.toString()}` : hh.toString()
  const mm_padded = mm < 10 ? `0${mm.toString()}` : mm.toString()
  return `${hh_padded}:${mm_padded}${am_pm.toLowerCase()} ${dd_padded}/${MM_padded}/${yy}`
}

const parse_user_agent: (user_agent?: string) => string | null = (user_agent): string | null => {
  if (user_agent === undefined) {
    return null
  }
  const device_info = UAParser(user_agent)
  const { browser, os } = device_info
  return `${browser.name ?? "Unknown Browser"} on ${os.name ?? "Unknown OS"}`
}

const pluralise: (value: number, singular: string, plural: string) => string = (
  value,
  singular,
  plural
) => {
  return value === 1 ? singular : plural
}

const random_code: (length: number) => number = (length) => {
  return Number(
    crypto
      .getRandomValues(new Uint32Array(Math.ceil(length / 8)))
      .join("")
      .slice(0, length)
  )
}

const sort_object = (obj: unknown): unknown => {
  if (obj === null || typeof obj !== "object") return obj
  if (Array.isArray(obj)) return obj.map(sort_object)
  const sorted_obj: Record<string, unknown> = {}
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted_obj[key] = sort_object((obj as Record<string, unknown>)[key])
    })
  return sorted_obj
}

const validate_code: (
  code?: number,
  length_min?: number
) => {
  is_valid: boolean
  message: string
} = (code, length_min) => {
  if (code === undefined) {
    return {
      is_valid: false,
      message: "Code is required"
    }
  }
  if (length_min === undefined) {
    return {
      is_valid: false,
      message: "Minimum length is required"
    }
  }
  if (code.toString().length === length_min) {
    return { is_valid: true, message: "Code valid" }
  }
  return {
    is_valid: false,
    message: `Code must be ${length_min.toString()} characters long`
  }
}

const validate_email: (email?: string) => {
  is_valid: boolean
  message: string
} = (email) => {
  if (email === undefined) {
    return {
      is_valid: false,
      message: "Email is required"
    }
  }
  const email_regex = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/
  if (email_regex.test(email) && email.length >= 8 && email.length <= 128) {
    return { is_valid: true, message: "Email valid" }
  }
  return {
    is_valid: false,
    message: "Email must be between 8 and 128 characters long"
  }
}

const validate_name: (name?: string) => {
  is_valid: boolean
  message: string
} = (name) => {
  if (name === undefined) {
    return {
      is_valid: false,
      message: "Name is required"
    }
  }
  const name_regex =
    /^([\p{L}]+([ '-]{0,1}(?=[\p{L}]))*([.]{0,1}(?![\p{L}]))*([. ]{0,1}(?=[\p{L}]))*)+$/u
  if (name_regex.test(name) && name.length >= 2 && name.length <= 64) {
    return { is_valid: true, message: "Name valid" }
  }
  return {
    is_valid: false,
    message:
      "Name must be between 2 and 64 characters long and contain only letters, spaces, hyphens, and apostrophes"
  }
}

const validate_number: (value?: string) => {
  is_valid: boolean
  message: string
} = (value) => {
  if (value === undefined) {
    return {
      is_valid: false,
      message: "Number is required"
    }
  }
  if (Number.isInteger(Number(value)) && value.length >= 1 && value.length <= 16) {
    return { is_valid: true, message: "Number valid" }
  }
  return {
    is_valid: false,
    message: "Number must be between 1 and 16 digits long"
  }
}

export default {
  decode_uint8_array,
  encode_uint8_array,
  parse_timeago,
  parse_timestamp,
  parse_user_agent,
  pluralise,
  random_code,
  sort_object,
  validate_code,
  validate_email,
  validate_name,
  validate_number
}
