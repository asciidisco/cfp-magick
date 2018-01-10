/* eslint-env jest */
const flatifyConfs = require('../src/flatify_confs')

const rawData = [['foo', 'bar'], ['baz', 'bam']]

test('can arrify nested data', () => {
  const result = flatifyConfs(rawData)
  const expected = ['foo', 'bar', 'baz', 'bam']
  expect(result).toEqual(expected)
})
