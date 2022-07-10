import React from 'react'
import { Header } from '../../../components/shared'
import { render, screen } from '@testing-library/react'

test('renders header', () => {
    render(<Header />)
    expect(screen.findAllByLabelText('About us'))
    expect(screen.findAllByLabelText('Projects'))
    expect(screen.findAllByLabelText('For Students'))
    expect(screen.findAllByLabelText('For Nonprofits'))
    expect(screen.getByRole('header')).toHaveTextContent(
        'About Us Projects For StudentsFor Nonprofits'
    )
})
