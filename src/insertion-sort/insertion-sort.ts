/**
 * Sorts a collection indexing element by element
 *  `Complexity: O(n^2)`
 * 
 * @param {Number[]} unorganizedCollection An Unorganized Collection 
 * @returns {Number[]} collection an Organized Collection
 */
const insertionSort = (unorganizedCollection: number[]): number[] => {

  return unorganizedCollection.reduce(
    (sortedArray: number[], item, index) => {

      if (index === 0) {
        return [item]
      }

      if (item < sortedArray[0]) {
        return [item, ...sortedArray]
      }

      if (item > sortedArray[sortedArray.length - 1]) {
        return [...sortedArray, item]
      }

      for (let elIndex = 0; elIndex < sortedArray.length; elIndex++) {
        const el = sortedArray[elIndex];
        
        if ((item > el) && (item < sortedArray[elIndex + 1])) {
          return [
            ...sortedArray.slice(0, elIndex + 1),
            item,
            ...sortedArray.slice(elIndex + 1),
          ] 
        } 
      }

    },
  []) 
}

export default insertionSort