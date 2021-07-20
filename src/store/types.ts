// Action types
export enum ReduxTypes {
  SUBMIT_STEP = 'SUBMIT_STEP',
  ONCHANGE = 'ONCHANGE',
  ONBLUR = 'ONBLUR'
}

// Data Types redux
export interface PropsInputsValidate {
  value: string
  onBlur: boolean
  validate: (value: string) => boolean
}

export type Form = {
  [key in string]?: PropsInputsValidate
} & {
  name: PropsInputsValidate
  email: PropsInputsValidate
  phone: PropsInputsValidate
  city: PropsInputsValidate
  state: PropsInputsValidate
  profession: PropsInputsValidate
};

export type State = {
  form: Form
  step: number
}
