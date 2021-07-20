import React from 'react'
import { TextField, Button } from '@material-ui/core'

import { PropsInputsValidate } from '../../store/types'

import * as S from './styles'

interface Props {
  name: PropsInputsValidate
  email: PropsInputsValidate
  phone: PropsInputsValidate
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
  onBlur: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
  submitStep: () => void
}

const FormUser: React.FC<Props> = ({ name, email, phone, onChange, onBlur, submitStep }) => {
  return (
    <>
      <S.InputRow>
        <TextField
          type='text'
          name='name'
          error={name.validate(name.value) && name.onBlur}
          value={name.value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          variant="outlined"
          label="Nome Completo"
          fullWidth
        />
      </S.InputRow>

      <S.InputRow>
        <TextField
          type='text'
          label='E-mail'
          error={email.validate(email.value) && email.onBlur}
          name='email'
          value={email.value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          variant="outlined"
          fullWidth
        />
      </S.InputRow>

      <S.InputRow>
        <TextField
          type='text'
          label='Telefone'
          error={phone.validate(phone.value) && phone.onBlur}
          name='phone'
          value={phone.value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          variant="outlined"
          fullWidth
        />
      </S.InputRow>

      <S.InputRow>
        <Button variant='contained' color="secondary" onClick={submitStep}>
          Próximo
        </Button>
      </S.InputRow>
    </>
  )
}

export default FormUser
