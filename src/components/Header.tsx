import React, {useCallback} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #235097, #715DCB);
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;


  h1{
    cursor: pointer;
  }
`
export default function Header(){
  const history = useHistory()
  const handleClick = useCallback(() => {
    history.push('/')
  }, [history])
  return (
    <HeaderContainer>
      <h1 onClick={handleClick}>Movie App</h1>
    </HeaderContainer>
  )
}