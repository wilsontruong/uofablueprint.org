import React from 'react'
import { render, screen } from '@testing-library/react'
import Criteria from '../../../components/studentApply/Criteria'

test('renders content', () => {
    render(<Criteria />)
    const semiTitleElement = screen.getByText("Growth")

    const paragraphElement = screen.getByText("Do you actively seek out ways to grow? Do you take action to work towards that growth?")
    expect(paragraphElement).toBeInTheDocument()
    expect(semiTitleElement).toBeInTheDocument()

})
