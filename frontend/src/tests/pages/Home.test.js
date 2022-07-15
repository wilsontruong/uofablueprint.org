import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../../pages'

test('renders home placeholder', () => {
    render(<Home />)
    const linkElement = screen.getByText('-home banner component placeholder-')
    expect(linkElement).toBeInTheDocument()

})
