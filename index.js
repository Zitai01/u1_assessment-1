// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  let answer = str1 + ' ' + str2
  return answer
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let sum = 0
  for (let i = 0; i < arrNums.length; i++) {
    if (typeof arrNums[i] === 'number') {
      sum += Math.abs(arrNums[i])
    }
  }
  return sum
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  //let answer = []
  let answer = Object.keys(object).map((keys) => {
    return object[keys]
  })

  return answer
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  let answer = nums.map((num) => {
    if (num % 2 == 0) {
      return num
    }
  })
  return answer
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  let answer = 1
  for (let i = 0; i < pow; i++) {
    answer *= num
  }
  return answer
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
