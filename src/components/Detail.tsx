import React from 'react'
import styled from 'styled-components'
import {fetcher} from '../common/request'
import {useParams} from 'react-router-dom'
import * as T from '../types/api'
import {getYear, convertMinToHour} from '../common/utils'
import useSwr from 'swr'
import LazyImage from './common/LazyImage'

const DetailContainer = styled.section<{backdrop: string}>`
  display: flex;
  flex-direction: column;

  .poster {
    width: 20rem;
    height: auto;
    border-radius: 1rem;
  }

  .detail-info {
    margin: 3rem;
    > h1 {
      font-size: 2rem;
    }
    > div {
      span {
        &:not(:first-child)::before{
          content: ' • ';
        }
      }
    }
    .tagline {
      color: #BFC0C6;
      font-weight: 500;
    }
  }

  .detail-header{
    display: flex;
    width: 100%;
    max-width: 1300px;

    padding: 1rem;
  }

  .background-overlay{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(to right, rgba(12.94%, 14.90%, 22.75%, 1.00) 150px, rgba(20.39%, 22.35%, 29.02%, 0.84) 100%);
  }
  .background{
    ${(props) => `background-image: url(${props.backdrop})`};
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }

  .cast-container {
    max-width: 1300px;
    overflow-x: scroll;
    margin: 0 auto;
  }
  
  .cast-list {
    display: flex;
    overflow-x: scroll;
  }

  .cast {
    &:not(:first-child) {
      margin-left: 1rem;
    }

    .cast-name {
      font-weight: 600;
    }
    .cast-character {
      font-weight: 300;
    }

  }
`

const getDetailUrl = (id: string) => `https://api.themoviedb.org/3/movie/${id}?language=ko-KR&append_to_response=credits`

export default function Detail(){
  const {id} = useParams<{id: string}>()
  const {data, error} = useSwr<T.Detail>(getDetailUrl(id), fetcher)

  if(error) {
    return <div>...error occured</div>
  }
  if(!data){
    return <div>...loading</div>
  }
  
  return (
    <DetailContainer backdrop={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`}>
      <div className="background">
        <div className="background-overlay">
          <section className="detail-header">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
            <div className='detail-info'>
              <h1>{data.title} ({getYear(data.release_date)})</h1>
              <div>
                <span>{data.release_date}</span>
                <span>{data.genres.map(genre => genre.name).join(', ')}</span>
                {
                  data.runtime && <span>{convertMinToHour(data.runtime)}</span>
                }
              </div>
              <h3>평가</h3>
              <span>{data.vote_average}({data.vote_count})</span>
              <h4 className="tagline"><i>{data.tagline}</i></h4>
              <h3>개요</h3>
              <p>
                {data.overview}
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className='cast-container'> 
        <h1>주요 출연진</h1>
        <div className='cast-list'> 
          {
            data.credits.cast.map(cast => {
              return (
                <div className='cast'>
                  <LazyImage src={`https://image.tmdb.org/t/p/w276_and_h350_face${cast.profile_path}`}/>
                  <div>
                    <div className='cast-name'>{cast.name}</div>
                    <div className='cast-character'>{cast.character}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </DetailContainer>
  )
}
