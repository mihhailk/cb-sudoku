import solver from "./solver"

describe('sudoku solver', () => {
  test('empty input', () => {
    const input = []
    expect(() => solver.solve(input)).toThrow(Error)
  })

  test('for empty input returns all possible values', ()=> {
    const result = solver.solve(solver.emptyGrid())
    expect(result.length).toBe(81)
    expect(result[0]).toStrictEqual([1,2,3,4,5,6,7,8,9])
  })

})