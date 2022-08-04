import React from 'react'
import { render, screen } from '@testing-library/react'
import Project from '../../pages/Project'

test('renders Project', () => {
    render(<Project />)
    const linkElement = screen.getByText('Our Projects')
    expect(linkElement).toBeInTheDocument()
})
