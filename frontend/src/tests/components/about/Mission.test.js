import React from 'react'
import { render, screen } from '@testing-library/react'
import Mission from '../../../components/about/Mission'

test('renders Member', () => {
    render(<Mission />)
    const linkElement = screen.getByText('Our Mission Statement')
    expect(linkElement).toBeInTheDocument()
})
