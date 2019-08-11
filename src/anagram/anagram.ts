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


export const areAnagrams = (...words: string[]) =>
  words.every((word, index, wordCollection) =>
    wordCollection.every(isSameWordCurry(word))
  )

export const checkAnagramWithSort = (a: string, b: string) => {
  const sortedA = a.split('').sort().join()
  const sortedB = b.split('').sort().join()

  return sortedA === sortedB
}

export const checkAnagramWithHashmap = (wordA: string, wordB: string) => {
  const characterCount = new Map<string, number>() //?

  wordA
    .split('')
    .forEach(letter => characterCount
      .set(letter, (characterCount.get(letter) || 0) + 1)
    )

  wordB
    .split('')
    .forEach(letter => {
      if (characterCount.has(letter) === false) {
        return false
      }

      characterCount
        .set(letter, characterCount!.get(letter) - 1)
    })

  return Array.from(characterCount.values()).every(num => num === 0)


}

export default checkAnagramWithHashmap