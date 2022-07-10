import React from 'react'
import { Footer } from '../../../components/shared'
import { render, screen } from '@testing-library/react'

test('renders footer', () => {
    render(<Footer />)
    expect(screen.findAllByLabelText('Blueprint 2022'))
    expect(screen.getByRole('footer')).toHaveTextContent(
        'Blueprint 2022 General Home General Projects For Students About FAQ For Nonprofits About FAQ Contact Us Email LinkedIn Instagram Github'
    )
})
