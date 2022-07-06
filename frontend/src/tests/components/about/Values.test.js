import { Value } from "../../../components/about";
import { render, screen } from '@testing-library/react'

test('renders values', () => {
    render(<Value />)
    expect(screen.getByRole("value")).toHaveTextContent("1. Mission First")
    expect(screen.getByRole("value")).toHaveTextContent("2. Perpetual Growth")
    expect(screen.getByRole("value")).toHaveTextContent("3. Cherish Each Other")
    expect(screen.getByRole("value")).toHaveTextContent("4. Always Innovate")
    expect(screen.getByRole("value")).toHaveTextContent("5. Be Humble")
})