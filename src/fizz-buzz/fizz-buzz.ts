
const isMultipleOf = (assertion: number, n: number) => n % assertion === 0

const fizzBuzz = (length: number = 15, customCollection?: number[]) =>
  Array.from(
    !!customCollection ? customCollection : Array(length + 1).keys(),
    (num => {
      const isFizz = num % 3 === 0
      const isBuzz = num % 5 === 0

      if (isFizz && isBuzz) {
        return 'FizzBuzz'
      }

      if (isFizz) {
        return 'Fizz'
      }

      if (isBuzz) {
        return 'Buzz'
      }

      return num
    })
  )




export default fizzBuzz