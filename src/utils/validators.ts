import { Form } from "../store/types"

// eslint-disable-next-line no-control-regex
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const PHONE_REGEX = /\d{2}\s?\d{8,9}/

export const notEmpty = (value: string) => {
  if (value) return false
  return true
}

export const validateEmail = (value: string) => {
  if (value.match(EMAIL_REGEX)) return false
  return true
}

export const validatePhone = (value: string) => {
  if (value.match(PHONE_REGEX)) return false
  return true
}

export const validateStep = (form: Form, fields: string[]) => {
  var isValid:boolean = true

  const fieldsValid = fields.filter((item) => form[item]?.validate(form[item]?.value || ''))

  if (fieldsValid.length > 0) return false

  return isValid
}
