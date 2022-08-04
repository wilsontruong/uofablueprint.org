import React from 'react'
import { render, screen } from '@testing-library/react'
import Criteria from '../../../components/nonprofitApply/Criteria'

test('renders content', () => {
    render(<Criteria />)
    const semiTitleElement = screen.getByText("Scope");
    const contentElement = screen.getByText("Is your project achievable within the alloted timeline?")
    expect(semiTitleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();

})
