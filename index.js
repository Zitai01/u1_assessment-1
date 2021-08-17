// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.

  let string = str1 + ' ' + str2
  return string
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element

  let sumArr = []

  const numsOnly = arrNums.filter((nums) => {
    if (typeof nums === 'number') {
      sumArr.push(nums)
    }
  })

  const sum = sumArr.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
  return sum
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  return Object.values(object)
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  const evenArray = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArray.push(nums[i])
    }
  }
  return evenArray
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided

  return Math.pow(num, pow)
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
