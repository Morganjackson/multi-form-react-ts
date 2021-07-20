import React from 'react'
import { TextField, Button } from '@material-ui/core'

import { PropsInputsValidate } from '../../store/types'

import * as S from './styles'

interface Props {
  city: PropsInputsValidate
  state: PropsInputsValidate
  profession: PropsInputsValidate
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
  onBlur: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
  submitStep: () => void
}

const FormPersonaDetails: React.FC<Props> = ({ city, state, profession, onChange, onBlur, submitStep }) => {
  return (
    <>
      <S.InputRow>
        <TextField
          type='text'
          label='Cidade'
          name='city'
          error={city.validate(city.value) && city.onBlur}
          value={city.value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          variant="outlined"
          fullWidth
        />
      </S.InputRow>

      <S.InputRow>
        <TextField
          type='text'
          label='Estado'
          error={state.validate(state.value) && state.onBlur}
          name='state'
          value={state.value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          variant="outlined"
          fullWidth
        />
      </S.InputRow>

      <S.InputRow>
        <TextField
          type='text'
          label='Profissão'
          error={profession.validate(profession.value) && profession.onBlur}
          name='profession'
          value={profession.value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          variant="outlined"
          fullWidth
        />
      </S.InputRow>

      <S.InputRow>
        <Button variant='contained' color='secondary' onClick={submitStep}>
          Enviar Formulário
        </Button>
      </S.InputRow>
    </>
  )
}

export default FormPersonaDetails
