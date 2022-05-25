import solver from "./solver"

describe('sudoku solver', () => {
  test('empty input', () => {
    const input = []
    expect(() => solver.hints(input)).toThrow(Error)
  })

  test('for empty input returns all possible values', ()=> {
    const result = solver.hints(solver.emptyGrid())
    expect(result.length).toBe(81)
    expect(result[0]).toStrictEqual([1,2,3,4,5,6,7,8,9])
  })

  test('output does not contain items which exists in same row', ()=>{
    let input = solver.emptyGrid();
    input[2] = 3
    const result = solver.hints(input)
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
    let input = solver.emptyGrid();
    input[2] = 3
    const result = solver.hints(input)
    expect(result[2]).toStrictEqual([3])
    expect(result[2+9 * 1]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2+9 * 2]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2+9 * 3]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2+9 * 4]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2+9 * 5]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2+9 * 6]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2+9 * 7]).toStrictEqual([1,2,4,5,6,7,8,9])
  })

  test('output does not contain items which exists in same Squre', ()=>{
    let input = solver.emptyGrid();
    input[2] = 3
    const result = solver.hints(input)
    expect(result[0]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[1]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[2]).toStrictEqual([3])
    expect(result[9]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[10]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[11]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[18]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[19]).toStrictEqual([1,2,4,5,6,7,8,9])
    expect(result[20]).toStrictEqual([1,2,4,5,6,7,8,9])
  })

  test('If one of hint items is unique for that row return it', ()=>{
    let input = solver.emptyGrid();
    input[0] = 1
    input[13] = 1
    input[24] = 2
    input[25] = 3
    const result = solver.solve(input)
    expect(result[26]).toStrictEqual(1)
  })

  test('output does not contain items which exists in same square', ()=>{

  })

  test('equals', ()=>{
    expect(solver.equals([1,2,'',3], [1,2,'',3])).toBe(true)
    expect(solver.equals(['',2,'',3], [1,2,'',3])).toBe(false)
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