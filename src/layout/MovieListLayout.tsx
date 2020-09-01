import React from 'react'
import styled from 'styled-components'

const MoviListLayoutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  >div {
    display: flex;
    height: 25rem;
    align-items: center;
    align-items: center;
    width: 100%;
    margin: 0 3rem;

    > div{
      display: flex;
      width: 100%;
      height: 100%;
      overflow-x: scroll;
    }
  }
`

export default function MovieListLayout({children}: {children: React.ReactNode}) {
  return (
    <MoviListLayoutContainer>
      <div>
        <div>
          {children}
        </div>
      </div>
    </MoviListLayoutContainer>
  )
}
