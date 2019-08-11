import { stringLiteral } from "@babel/types";

export const isPalindromeByReverse = (word: string): boolean => {
  return word === word.split('').reverse().join('')
}

export const isAnyPermutationPalindrome = (word: string): boolean => {
  const unmatched = new Set<string>()
  word.split('').forEach(char => {
    if (unmatched.has(char)) {
      unmatched.delete(char)
    } else {
      unmatched.add(char)
    }
  })

  return unmatched.size <= 1
}



export default isPalindromeByReverse

