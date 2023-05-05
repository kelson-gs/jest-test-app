import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { jest } from "@jest/globals"

// pages component
import Login from "../../pages/login"


describe("Login", () => {

  // teste renderizando componente e verificando se existe um button no doc.
  it("renders a heading", () => {
    render(<Login />)

    const heading = screen.getByRole("button")
    
    expect(heading).toBeInTheDocument()
  })

  // teste com verificação de texto no component.
  it("render login name", () => {
    render(<Login />)
    
    const loginName = screen.getByText(/Login.../i)
    expect(loginName).toBeInTheDocument()
  })

  // teste com mock function.
  test("mock test", () => {
    const mockFn = jest.fn()

    expect(mockFn).toMatchSnapshot()
  })

  //criando um teste de função mock de soma.
  test("mock test function soma", () => {
    const soma = jest.fn((n1, n2) => {
      return n1 + n2;
    })

    expect(soma(2, 2)).toBe(4)
  })

});







