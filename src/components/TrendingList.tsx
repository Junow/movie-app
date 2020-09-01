import React from 'react'
import styled from 'styled-components'
import useSwr from 'swr'
import {fetcher} from '../common/request'
import {useHistory} from 'react-router-dom'
import * as T from '../types/api'
import MovieCard from './MovieCard'
import MovieListLayout from '../layout/MovieListLayout'

const uri = 'https://api.themoviedb.org/3/trending/movie/day?language=ko-KR'

const TrendingContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  > h2{
    padding: 0 3rem;
  }

`
export default function Trending(){
  const history = useHistory()
  const {data, error} = useSwr<T.NowPlaying>(uri, fetcher)


  if(error){
    return <div>...error occured</div>
  }

  if(!data){
    return <div>...loading</div>
  }
  return (
    <TrendingContainer>
      <h2>Trending</h2>
      <MovieListLayout>
        {
          data.results.map(movie => {
            const handleClick = () => {
              history.push(`/detail/${movie.id}`)
            }
            return (
              <MovieCard key={movie.id} movie={movie} handleClick={handleClick}/>
            )
          })
        }
      </MovieListLayout>
    </TrendingContainer>
  )
}