import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { jest } from "@jest/globals"

// pages component
import Home from '../../pages/home';

describe("Home", () => {
  it("render Home page", () => {
    render(<Home />)

    const homeText = screen.getByText(/Hello world/i)
    expect(homeText).toBeInTheDocument()
  })
})