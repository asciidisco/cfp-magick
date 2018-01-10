/* eslint-env jest */
const reduce = require('../src/reducer')

const rawData = {
  'January': [
    {cfp: {has_cfp: false, link: ''}},
    {cfp: {has_cfp: true, link: ''}},
    {cfp: {has_cfp: true, link: 'http://example.com'}},
    {cfp: {has_cfp: false, link: 'http://example.com'}}
  ],
  'Febuary': [
    {cfp: {has_cfp: false, link: ''}},
    {cfp: {has_cfp: true, link: ''}},
    {cfp: {has_cfp: true, link: 'http://example2.com'}},
    {cfp: {has_cfp: false, link: 'http://example2.com'}}
  ]
}

test('can filter by cfp', () => {
  const result = reduce(rawData)
  const expected = [{cfp: {has_cfp: true, link: 'http://example.com'}}, {cfp: {has_cfp: true, link: 'http://example2.com'}}]
  expect(result).toEqual(expected)
})
