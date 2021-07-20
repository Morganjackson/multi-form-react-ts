import Redux from 'redux'
import { validateStep } from '../utils/validators'
import {
  ReduxTypes,
  State,
} from './types'


export const onSubmitStep = (state: State) => (dispatch: Redux.Dispatch) => {
  let fields = []
  
  if (state.step === 0) {
    fields = ['name', 'email', 'phone']
  } else {
    fields = ['city', 'state', 'profession']
  }

  const isValid = validateStep(state.form, fields)
  
  if (isValid) {
    dispatch({
      type: ReduxTypes.SUBMIT_STEP
    })
  }
}

export const onChangeInput = (value: string, field: string) => ({
  type: ReduxTypes.ONCHANGE,
  value,
  field
})

export const onBlurInput = (field: string) => ({
  type: ReduxTypes.ONBLUR,
  field
})
