import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from '../../pages'

test('renders home placeholder', () => {
    render(<Home />)
    const linkElement = screen.getByText('-home placeholder-')
    expect(linkElement).toBeInTheDocument()
})
