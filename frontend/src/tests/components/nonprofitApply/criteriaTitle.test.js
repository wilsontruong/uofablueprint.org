import React from 'react'
import { render, screen } from '@testing-library/react'
import Criteria from '../../../components/nonprofitApply/Criteria'

test('renders content', () => {
    render(<Criteria />)
    const titleElement = screen.getByText("Decision Criteria");
    expect(titleElement).toBeInTheDocument();

})
