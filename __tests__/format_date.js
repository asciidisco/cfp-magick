/* eslint-env jest */
const formatDate = require('../src/format_date')

test('can format date', () => {
  const rawDate = '01-04-2018'
  const result = formatDate(rawDate)
  const expected = 'Thursday, January 4, 2018'
  expect(result).toBe(expected)
})
