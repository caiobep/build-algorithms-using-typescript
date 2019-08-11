const isSameLetter = (a: string) => (b: string) =>
  a.toLowerCase() === b.toLowerCase()


const letterExistsInWord = (word: string) => (letter: string) =>
  word
    .split('')
    .some(isSameLetter(letter))

export const isSameWord = (a: string, b: string) =>
  a.length === b.length &&
  a
    .split('')
    .every(letterExistsInWord(b))

export const isSameWordCurry = (a: string) => (b: string) =>
  a
    .split('')
    .every(letterExistsInWord(b))


export const isAnagram = (...words: string[]) =>
  words.every((word, index, wordCollection) =>
    wordCollection.every(isSameWordCurry(word))
  )

export default isAnagram