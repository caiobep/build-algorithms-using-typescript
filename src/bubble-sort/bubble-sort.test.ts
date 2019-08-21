import bubbleSort from './bubble-sort'

test('Sorts a collection', () => {
  const sortedArray = bubbleSort([2, 3, 4, 8, 5, 1, 9, 6, 7])

  expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

