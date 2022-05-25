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

  test('output does not contain items which exists in same row', ()=>{
    let input = solver.emptyGrid();
    input[2] = 3
    const result = solver.solve(input)
    expect(result[0]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[1]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2]).toStrictEqual([3])
    expect(result[3]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[4]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[5]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[6]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[8]).toStrictEqual([1,2,4,5,6,7,8,9])
  })

  test('output does not contain items which exists in same column', ()=>{

  })

  test('output does not contain items which exists in same square', ()=>{

  })

  test('belongs to row', ()=> {
    expect(solver.belongsToRow(0)).toBe(0)
    expect(solver.belongsToRow(8)).toBe(0)
    expect(solver.belongsToRow(9)).toBe(1)
    expect(solver.belongsToRow(80)).toBe(8)
  })

  test('belongs to column', ()=> {
    expect(solver.belongsToColumn(0)).toBe(0)
    expect(solver.belongsToColumn(1)).toBe(1)
    expect(solver.belongsToColumn(8)).toBe(8)
    expect(solver.belongsToColumn(9)).toBe(0)
    expect(solver.belongsToColumn(72)).toBe(0)
    expect(solver.belongsToColumn(80)).toBe(8)
  })

  test('belongs to Square', ()=> {
    expect(solver.belongsToSquare(0)).toBe(0)
    expect(solver.belongsToSquare(1)).toBe(0)
    expect(solver.belongsToSquare(2)).toBe(0)
    expect(solver.belongsToSquare(9)).toBe(0)
    expect(solver.belongsToSquare(10)).toBe(0)
    expect(solver.belongsToSquare(11)).toBe(0)
    expect(solver.belongsToSquare(18)).toBe(0)
    expect(solver.belongsToSquare(19)).toBe(0)
    expect(solver.belongsToSquare(20)).toBe(0)

    expect(solver.belongsToSquare(54)).toBe(6)
    expect(solver.belongsToSquare(55)).toBe(6)
    expect(solver.belongsToSquare(56)).toBe(6)
    expect(solver.belongsToSquare(63)).toBe(6)
    expect(solver.belongsToSquare(64)).toBe(6)
    expect(solver.belongsToSquare(65)).toBe(6)
    expect(solver.belongsToSquare(72)).toBe(6)
    expect(solver.belongsToSquare(73)).toBe(6)
    expect(solver.belongsToSquare(74)).toBe(6)

    expect(solver.belongsToSquare(60)).toBe(8)
    expect(solver.belongsToSquare(61)).toBe(8)
    expect(solver.belongsToSquare(62)).toBe(8)
    expect(solver.belongsToSquare(69)).toBe(8)
    expect(solver.belongsToSquare(70)).toBe(8)
    expect(solver.belongsToSquare(71)).toBe(8)
    expect(solver.belongsToSquare(78)).toBe(8)
    expect(solver.belongsToSquare(79)).toBe(8)
    expect(solver.belongsToSquare(80)).toBe(8)
  })

})