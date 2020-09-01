import React from 'react'
import styled from 'styled-components'
import SearchBlock from './SearchBlock'
import NowPlayingList from './NowPlayingList'
import TrendingList from './TrendingList'
const MainContainer = styled.div`
  background: '#282C35';
  display: flex;
  place-items: center;
  flex-direction: column;
  margin: 1rem;
`

export default function Main() {
  return (
    <MainContainer>
      <SearchBlock/>
      <NowPlayingList/>
      <TrendingList/>
    </MainContainer>
  )
}
