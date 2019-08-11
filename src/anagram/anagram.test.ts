import areAnagrams from './anagram'


test('Return true when Earth and Heart are passed', () => {

  const result = areAnagrams('earth', 'heart') //?

  expect(result).toBe(true)
})

test('Returns true when silent and listen are passed', () => {

  const result = areAnagrams('silent', 'listen')

  expect(result).toBe(true)
})

test('Returns true when silent and listen are passed', () => {

  const result = areAnagrams('babab', 'bbaaa')

  expect(result).toBe(false)
})

test('Returns false when foo and bar are passed', () => {

  const result = areAnagrams('foo', 'bar')

  expect(result).toBe(false)
})
