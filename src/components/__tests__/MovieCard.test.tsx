import React from 'react'
import {render, RenderResult, fireEvent} from '@testing-library/react'
import NowPlaying, {MovieCardProps} from '../MovieCard'
import {Results} from '../../types/api'

describe('<NowPlaying/>', () => {
  const setup = (props: Partial<MovieCardProps>={}) => {
    const initialProps: MovieCardProps = {
      movie: {
        popularity: 346.971,
      vote_count: 303,
      video: false,
      poster_path: "/ylQRi3edixhzUiubw7LQP1YhI6W.jpg",
      id: 577922,
      adult: false,
      backdrop_path: "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
      original_language: "en",
      original_title: "Tenet",
      genre_ids: [
          28,
          53
      ],
      title: "테넷",
      vote_average: 7.6,
      overview: "시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르를 막기 위해 투입된 작전의 주도자. 인버전에 대한 정보를 가진 닐과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다!",
      release_date: "2020-08-22"
      },
      handleClick: jest.fn()
    }

    return render(<NowPlaying {...initialProps} {...props}/>)
  }

  it('should render correctly', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })

  it('should have correct title', () => {
    const {getByTestId} = setup()
    const title = getByTestId('title')
    expect(title).toHaveTextContent('테넷')
  })

  it('should fire function', () => {
    const handleClick = jest.fn()
    const {getByTestId} = setup({
      handleClick
    })
    const title = getByTestId('title')
    expect(title).toBeTruthy()
    if(!title) return
    fireEvent.click(title)
    expect(handleClick.mock.calls.length).toBe(1)
  })


})