const main = require('./index')

// runs the fetcher/reducer and outputs the data
async function init () {
  try {
    await main()
  } catch (error) {
    console.warn('An error occured:')
    console.error(error)
  }
}

init()
