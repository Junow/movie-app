import React from 'react'
import styled from 'styled-components'

const SearchBlockContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/yGNnjoIGOdQy3douq60tULY8teK.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;

  justify-content: center;
  align-items: center;
  margin: auto;
`

export default function SearchBlock() {
  return (
    <SearchBlockContainer>
      <div>
        <div>
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>

      </div>
    </SearchBlockContainer>

  )
}