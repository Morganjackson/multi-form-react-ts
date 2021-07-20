import React from 'react'

import img from '../../assets/img/done.svg'
import * as S from './styles'

const FormSuccess: React.FC = () => {
  return (
    <S.Container>
      <h1>O seu formulário foi enviado com sucesso!</h1>
      <img src={img} alt='done' />
    </S.Container>
  )
}

export default FormSuccess
