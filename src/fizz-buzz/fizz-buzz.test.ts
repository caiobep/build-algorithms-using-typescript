import fizzBuzz from './fizz-buzz'


test('For multiples of 3, print Fizz', () => {
  const result = fizzBuzz(0, [1, 2, 3, 4, 6])

  expect(result).toEqual([1, 2, 'Fizz', 4, 'Fizz'])
})

test('For multiples of 5, print Buzz', () => {
  const result = fizzBuzz(0, [5, 7, 10])

  expect(result).toEqual(['Buzz', 7, 'Buzz'])
})

test('For multiples of 3 and 5, print FizzBuzz', () => {
  const result = fizzBuzz(0, [5, 6, 8, 9, 10, 15])

  expect(result).toEqual(['Buzz', 'Fizz', 8, 'Fizz', 'Buzz', 'FizzBuzz'])
})

test('Generates array based on specified length', () => {
  const result = fizzBuzz(15)

  expect(result.length).toEqual(16) // 0 is valid
  expect(result).toEqual([
    'FizzBuzz',
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz'
  ])

})



