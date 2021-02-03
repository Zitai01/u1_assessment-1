const functions = require('../')

describe('Unit 1 Assessment Questions', () => {
  it('joinStrings should join two strings', () => {
    let str1 = 'Hello'
    let str2 = 'World'
    let result = `${str1} ${str2}`
    expect(functions.joinStrings(str1, str2)).toBe(result)
  })
  it('absoluteSum should sum all nums in an array', () => {
    let arrNums = [1,2,3,'4']
    let result = 6
    expect(functions.absoluteSum(arrNums)).toBe(result)
  })
  it('returnAllValues should return all the values of an Object', () => {
    let obj = {1: 'one', 2: 'two', 3: 'three'}
    let result = ['one', 'two', 'three']
    expect(functions.returnAllValues(obj)).toEqual(expect.arrayContaining(result))
  })
  it('countItems', () => {
    let arr = [1,2,3,4]
    let result = 4
    expect(functions.countItems(arr)).toBe(result)
  })
  it('returnAllEvens', () => {
    let arr = [1,2,3,4]
    let result = [2,4]
    expect(functions.returnAllEvens(arr)).toEqual(expect.arrayContaining(result))
  })
  it('returnPower', () => {
    let num = 3
    let pow = 3
    let result = 27
    expect(functions.returnPower(num, pow)).toBe(result)
  })
})
