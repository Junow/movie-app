import React, { ReactChild, ReactNode } from 'react'
import {render} from '@testing-library/react'
import Detail from '../Detail'
import {createMemoryHistory, MemoryHistory, History} from 'history'
import { Router, Route, MemoryRouter } from "react-router-dom";
describe('<Detail/>', () => {

  const setup = () => {
    return render(<Detail/>)
  }

  function renderWithRouter(
    ui,
    {
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
  ) {
    const Wrapper = ({ children }) => (
      <Router history={history}>{children}</Router>
    )
    return {
      ...render(ui, { wrapper: Wrapper }),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      history,
    }
  }


  it('should render properly', () => {
    const route = '/detail/123'
    const wrapper = renderWithRouter(<Detail />, { route }) 
    expect(wrapper).toMatchSnapshot()
  })
  

})
