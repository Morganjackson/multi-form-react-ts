import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { onChangeInput, onBlurInput, onSubmitStep } from '../../store/actions'
import { State } from '../../store/types'

import FormUser from '../../components/FormUser'
import * as S from './styles'
import FormPersonaDetails from '../../components/FormPersonaDetails'
import FormSuccess from '../../components/FormSuccess'
import { Stepper, Step, StepLabel } from '@material-ui/core'

const UserForm: React.FC = () => {
  const state = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const steps = ['Dados pessoais', 'Dados cadastrais', 'Formulário enviado']

  const ChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(onChangeInput(e.target.value, e.target.name))
  }

  const BlurInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(onBlurInput(e.target.name))
  }

  const submitStep = () => {
    dispatch(onSubmitStep(state))
  }

  return (
    <S.Container>
      <h1>Multi-form react</h1>

      <Stepper alternativeLabel activeStep={state.step}>
        {steps.map((label: string, index: number) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {state.step === 0 && (
        <FormUser
          name={state.form.name}
          email={state.form.email}
          phone={state.form.phone}
          onChange={ChangeInput}
          onBlur={BlurInput}
          submitStep={submitStep}
        />
      )}

      {state.step === 1 && (
        <FormPersonaDetails
          city={state.form.city}
          state={state.form.state}
          profession={state.form.profession}
          onChange={ChangeInput}
          onBlur={BlurInput}
          submitStep={submitStep}
        />
      )}

      {state.step === 2 && <FormSuccess />}
    </S.Container>
  )
}

export default UserForm
