import React from 'react'
import styled from 'styled-components'
import {Results} from '../types/api'
import {useHistory} from 'react-router-dom'
import LazyImage from './common/LazyImage'

const NowPlayingItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;

  margin: 1rem 0;
  margin-left: 2rem;
  :first-child{
    margin-left: 0;
  }

  > img{
    width: 10rem;
    height: auto;
    border-radius: .5rem;
    cursor: pointer;
  }
  >span{
    color: #717171;
    cursor: pointer;
  }
`

export interface MovieCardProps {
  movie: Results
  handleClick: () => void
}
export default React.memo(function NowPlaying({
  movie,
  handleClick
}: MovieCardProps){
  return (
    <NowPlayingItem>
      {
        movie.poster_path && (
          <LazyImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} onClick={handleClick}/>
        )
      }
      <div>
        <h3 onClick={handleClick} data-testid={'title'}>{movie.title}</h3>
        <span>
          {movie.release_date}
        </span>
      </div>
    </NowPlayingItem>
  )
})