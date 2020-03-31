<<<<<<< HEAD
import { Sum, Addlist, DivideBy } from './MyMath.js'
=======
import { Sum } from './MyMath.js'
>>>>>>> 85308e767b6d679b23adec243374a9d10fde4199

describe('Testing Sum', () => {
it('Adds a string and a number', () => {
  var result = Sum("Test", 5);
  expect(result).toBeUndefined()
});
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})
test('border cases', () => {
  expect(Sum(-10, 5)).toBe(-5)
  //expect(Sum(.1, .2)).toBe(.3)
  expect(Sum(10000000000000000000, 2)).toBe(10000000000000000002)
})

describe('Testing Addlist', () =>
{
  let list = [1,2,3,4];
  let result = Addlist(list);
  expect(result).toBe(10);
  list = [1,2,3,4,100,10000];
  restult = Addlist(list);
  expect(result.toBe(10110))
})

describe('testing Divideby', () =>{

})

});





// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
