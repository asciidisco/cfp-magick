const fetch = require('./src/fetcher')
const reduce = require('./src/reducer')
const display = require('./src/display')

// runs the fetche, reducer and display function
module.exports = async (displayFunc) => {
  const conferenceData = await fetch()
  const eventsWithCfp = reduce(conferenceData)
  display(eventsWithCfp, displayFunc)
}
