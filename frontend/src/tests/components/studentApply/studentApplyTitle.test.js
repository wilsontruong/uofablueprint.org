import React from 'react'
import { render, screen } from '@testing-library/react'
import Criteria from '../../../components/studentApply/Criteria'

test('renders title', () => {
    render(<Criteria />)
    const titleElement = screen.getByText('Decision Criteria')
    expect(titleElement).toBeInTheDocument()
})
