import React from 'react'
import {render} from '@testing-library/react'
import Header from '../Header'

describe('<Header/>', () => {
  const setup = () => {
    return render(<Header/>)
  }
  it('should render correctly', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })

  it('should have corrennt title', () => {
    const {getByText} = setup()
    expect(getByText('Movie App')).toBeInTheDocument()
  })
})
