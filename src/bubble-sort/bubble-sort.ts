
export const bubbleSort = (collection: number[]): number[] => {

  while (true) {
    let hasSwappedElement = false

    collection.forEach((value, index, collection) => {

      if (collection[index + 1] && (value > collection[index + 1])) {
        collection[index] = collection[index + 1]
        collection[index + 1] = value

        hasSwappedElement = true
        console.log(collection)
      }

    })

    if (hasSwappedElement === false) {
      break
    }
  }

  return collection
}

export default bubbleSort