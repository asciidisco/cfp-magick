const chalk = require('chalk')
const formatDate = require('./format_date')

// displays the list of conferences
module.exports = (conferences, displayFunction) => {
  displayFunction = displayFunction || process.stdout
  conferences.forEach(conference => {
    displayFunction.write(conference.location.emoji_country + '  ')
    displayFunction.write(chalk.red(conference.name) + ' - ')
    if (conference.date.start === conference.date.end) {
      displayFunction.write(chalk.yellow(formatDate(conference.date.start)) + ' - ')
    } else {
      displayFunction.write(chalk.yellow(formatDate(conference.date.start)) + chalk.blue(' to '))
      displayFunction.write(chalk.yellow(formatDate(conference.date.end)) + ' - ')
    }
    displayFunction.write(chalk.green(conference.cfp.link))
    displayFunction.write('\n')
  })
}
