import React from 'react'
import { render, screen } from '@testing-library/react'
import Criteria from '../../../components/nonprofitApply/Criteria'

test('renders content', () => {
    render(<Criteria />)
    const titleElement = screen.getByTestId("/assets/puzzle-piece.png");
    expect(titleElement).toBeInTheDocument();

})
