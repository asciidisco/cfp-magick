/* eslint-env jest */
const arrifyConfs = require('../src/arryify_confs')

const rawData = {
  'January': ['foo', 'bar'],
  'February': ['baz', 'bam']
}

test('can arrify nested data', () => {
  const result = arrifyConfs(rawData)
  const expected = [['foo', 'bar'], ['baz', 'bam']]
  expect(result).toEqual(expected)
})
