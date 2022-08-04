import React from 'react'
import { render, screen } from '@testing-library/react'
import Criteria from '../../../components/studentApply/Criteria'

test('renders image', () => {
    render(<Criteria />)

    const paragraphElement = screen.getByTestId("/assets/growth.png")
    expect(paragraphElement).toBeInTheDocument()

})
