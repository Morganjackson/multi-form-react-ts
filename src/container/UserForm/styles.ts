import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: white;
  width: 25%;
  margin: 50px auto;
  box-shadow: 0 3px 3px 0 rgb(84 84 89 / 40%);
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 769px) {
    width: 70%;
    margin: 10px auto;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
    margin: 10px auto;
  }
`
