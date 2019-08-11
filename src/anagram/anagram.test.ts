import isAnagram, { isSameWord } from './anagram'


test('Return true when Earth and Heart are passed', () => {

  const result = isAnagram('earth', 'heart') //?

  expect(result).toBe(true)
})

test('Returns true when silent and listen are passed', () => {

  const result = isAnagram('silent', 'listen')

  expect(result).toBe(true)
})

test('Returns false when foo and bar are passed', () => {

  const result = isAnagram('foo', 'bar')

  expect(result).toBe(false)
})
