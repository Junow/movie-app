import React from 'react'
import styled from 'styled-components'
import useSwr from 'swr'
import {fetcher} from '../common/request'
import * as T from '../types/api'
import MovieCard from './MovieCard'
import {useHistory} from 'react-router-dom'
import MovieListLayout from '../layout/MovieListLayout'
const uri = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR'

const NowPlayingContainer = styled.section`
  max-width: 1200px;
  width: 100%;

  a{
    text-decoration: none;
    color: white;
  }
`

export default function NowPlayingList(){
  const history = useHistory()

  const {data, error} = useSwr<T.NowPlaying>(uri, fetcher)
  if(error) {
    return <div>...error occured</div>
  }
  if(!data){
    return <div>...loading</div>
  }
  return (
    <NowPlayingContainer>
      <h2>현재 상영중</h2>
      <MovieListLayout>
        {
          data.results.map(movie => {
            const handleClick = () => {
              history.push(`/detail/${movie.id}`)
            }
            return <MovieCard key={movie.id} movie={movie} handleClick={handleClick}/>
          })
        }
      </MovieListLayout>
    </NowPlayingContainer>
  )
}