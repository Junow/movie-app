import React, {useRef} from 'react'
import Placeholder from '../../assets/image-placeholder.png'
import styled from 'styled-components'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
const Container = styled.div`
  position: relative;
  width: 10rem;
  height: 15rem;

  .lazy-image {
    width: 10rem;
    height: 15rem;
    border-radius: .5rem;
    position: absolute;
    left: 0;
    top: 0;

    background-image: url(${Placeholder});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .image {
    position: relative;
    width: 10rem;
    height: auto;
    border-radius: .5rem;
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

  return (
    <Container onClick={onClick}>
      <div className='lazy-image' ref={placeholderRef} style={{}}/>
      <img
        data-src={src}
        ref={intersectionObserverRef}
        className='image'
      />
    </Container>
  )
}
