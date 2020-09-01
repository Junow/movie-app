import React, {useRef} from 'react'
import Placeholder from '../../assets/image-placeholder.png'
import styled from 'styled-components'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
const Container = styled.div`
  .lazy {
    width: 10rem;
    height: 15rem;
    background-image: url(${Placeholder});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .loaded {
    display: none;
    border-radius: .5rem;
    cursor: pointer;
  }

  .image {
    width: 10rem;
    height: auto;
    border-radius: .5rem;
    cursor: pointer;
  }
`
export default function LazyImage({src, onClick}: {src: string, onClick?: () => void}) {
  const placeholderRef = useRef<HTMLImageElement | null>(null)
  const intersectionObserverRef = useIntersectionObserver((entry) => {
    if(!entry.isIntersecting) return
    const target = entry.target
    const src = target.getAttribute('data-src')
    target.removeAttribute('data-src')
    if(!src) return
    target.setAttribute('src', src) 
  }, [])

  const onLoad = () => {
    if(!placeholderRef.current) return
    placeholderRef.current.classList.remove('lazy')
    placeholderRef.current.classList.add('loaded')
  }
  return (
    <Container onClick={onClick}>
      <div className='lazy' ref={placeholderRef}/>
      <img
        data-src={src}
        onLoad={onLoad}
        ref={intersectionObserverRef}
        className='image'
      />
    </Container>
  )
}
