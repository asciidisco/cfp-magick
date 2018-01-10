/* eslint-env jest */
const chalk = require('chalk')
const display = require('../src/display')

const rawData = [
  {name: 'a', date: {start: '01-01-2018', end: '01-02-2018'}, location: {emoji_country: 'x'}, cfp: {link: 'http://example.com'}},
  {name: 'b', date: {start: '01-01-2018', end: '01-01-2018'}, location: {emoji_country: 'x'}, cfp: {link: 'http://example2.com'}}
]

const expected = [
  'x  ',
  chalk.red('a') + ' - ',
  chalk.yellow('Monday, January 1, 2018') + chalk.blue(' to '),
  chalk.yellow('Tuesday, January 2, 2018') + ' - ',
  chalk.green('http://example.com'),
  '__',
  'x  ',
  chalk.red('b') + ' - ',
  chalk.yellow('Monday, January 1, 2018') + ' - ',
  chalk.green('http://example2.com'),
  '__'
]

test('can filter by cfp', () => {
  let collectedResult = []
  const collector = {write: data => collectedResult.push(data.replace('\n', '__'))}
  display(rawData, collector)
  expect(collectedResult).toEqual(expected)
})
