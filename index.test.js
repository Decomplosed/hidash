const assert = require('assert')
const { forEach, map } = require('./index')

const test = (desc, fn) => {
  console.log('----', desc)
  try {
    fn()
  } catch (err) {
    console.log(err.message)
  }

}

test('Test for forEach', () => {
  let sum = 0
  forEach([1, 2, 3], value => {
    sum += value
  })

  assert.strictEqual(sum, 6, 'Expected forEach to sum the array')
})

test('Test for map', () => {
  const result = map([1, 2, 3], value => {
    return value * 2
  })

  if (result[0] !== 2) {
    throw new Error(`Expected to find 2, but found ${result[0]}`)
  } else {
    console.log('All good! :)')
  }

  if (result[1] !== 4) {
    throw new Error(`Expected to find 4, but found ${result[1]}`)
  } else {
    console.log('All good! :)')
  }

  if (result[2] !== 6) {
    throw new Error(`Expected to find 6, but found ${result[2]}`)
  } else {
    console.log('All good! :)')
  }
})
