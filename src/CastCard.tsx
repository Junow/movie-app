import React from 'react'
import styled from 'styled-components'
import {Cast} from './types/api'
const Container = styled.li`

`

export default function CastCard({
  cast_id, character, credit_id, gender, id, name, order, profile_path
}: Cast){
  return (
    <Container>
      
    </Container>
  )
}
