import insertionSort from './insertion-sort'

test('Creates an array with created element', () => {
  const sortedArray = insertionSort([2])

  expect(sortedArray).toEqual([2])
})

test('Place a smaller element in front of bigger ones', () => {
  const sortedArray = insertionSort([2, 1])

  expect(sortedArray).toEqual([1, 2])
})

test('Place a bigger element in after smaller ones', () => {
  const sortedArray = insertionSort([2, 1, 5])

  expect(sortedArray).toEqual([1, 2, 5])
})

test("Place elements in between numbers when it's bigger than first and smaller than last element", () => {
  const sortedArray = insertionSort([6, 1, 5])

  expect(sortedArray).toEqual([1, 5, 6])
})

test('Sorts a collection', () => {
  const sortedArray = insertionSort([2, 3, 4, 8, 5, 1, 9, 6, 7])

  expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
