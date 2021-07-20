import reducer from "./reducer"
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { State } from "./types"
import { notEmpty, validateEmail, validatePhone } from "../utils/validators"


export const INITIAL_STATE: State = {
  form: {
    name: {
      value: '',
      onBlur: false,
      validate: (value: string) => notEmpty(value)
    },
    email: {
      value: '',
      onBlur: false,
      validate: (value: string) => validateEmail(value)
    },
    phone: {
      value: '',
      onBlur: false,
      validate: (value: string) => validatePhone(value)
    },
    city: {
      value: '',
      onBlur: false,
      validate: (value: string) => notEmpty(value)
    },
    state: {
      value: '',
      onBlur: false,
      validate: (value: string) => notEmpty(value)
    },
    profession: {
      value: '',
      onBlur: false,
      validate: (value: string) => notEmpty(value)
    },
  },
  step: 0,
}

export default createStore(reducer, INITIAL_STATE, applyMiddleware(thunk))
