import React from 'react'
import { render, screen } from '@testing-library/react'
import Member from '../../../components/about/Member'

test('renders Member', () => {
    render(<Member />)
    const linkElement = screen.getByText('Meet the Team')
    expect(linkElement).toBeInTheDocument()
})
