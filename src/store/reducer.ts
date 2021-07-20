import { Reducer } from 'redux'
import { INITIAL_STATE } from './index'

import {
  ReduxTypes,
  State
} from './types'

const reducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.SUBMIT_STEP:
      return {
        ...state,
        step: state.step + 1
      }
    case ReduxTypes.ONCHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: {
            ...state.form[action.field],
            value: action.value
          }
        }
      }
      case ReduxTypes.ONBLUR:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: {
            ...state.form[action.field],
            onBlur: true
          }
        }
      }
    default:
      return state
  }
}

export default reducer
