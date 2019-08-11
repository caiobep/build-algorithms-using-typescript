import isPalindrome, { isAnyPermutationPalindrome } from './palindrome'

test('Returns true when word reads the same in reverse order', () => {
  expect(isPalindrome('madam')).toBe(true)
  expect(isPalindrome('toot')).toBe(true)
  expect(isPalindrome('radar')).toBe(true)
  expect(isPalindrome('civic')).toBe(true)

  expect(isPalindrome('batata')).toBe(false)
  expect(isPalindrome('caio')).toBe(false)
})

test('Returns true if any permutation of the string is a palindrome', () => {
  expect(isAnyPermutationPalindrome('civic')).toBe(true)
  expect(isAnyPermutationPalindrome('vicic')).toBe(true)
  expect(isAnyPermutationPalindrome('toot')).toBe(true)
  expect(isAnyPermutationPalindrome('toto')).toBe(true)

  expect(isAnyPermutationPalindrome('civil')).toBe(false)
})
