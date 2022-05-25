import solver from "./solver";

describe('sudoku solver', () => {
  test('empty input', () => {
    const input = []
    expect(() => solver.solve(input)).toThrow(Error)
  })
})