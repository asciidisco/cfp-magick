/* eslint-env jest */
const filterByCfp = require('../src/filter_by_cfp')

const rawData = [
  {cfp: {has_cfp: false, link: ''}},
  {cfp: {has_cfp: true, link: ''}},
  {cfp: {has_cfp: true, link: 'http://example.com'}},
  {cfp: {has_cfp: false, link: 'http://example.com'}}
]

test('can filter by cfp', () => {
  const result = filterByCfp(rawData)
  const expected = [{cfp: {has_cfp: true, link: 'http://example.com'}}]
  expect(result).toEqual(expected)
})
