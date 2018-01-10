const https = require('https')
module.exports = () => {
  return new Promise((resolve, reject) => {
    https.get('https://webconf-api-2018.glitch.me/', res => {
      let contents = ''
      res.on('data', data => {
        contents += data
      })
      res.on('end', () => {
        try {
          const parsedContents = JSON.parse(contents)
          resolve(parsedContents)
        } catch (error) {
          reject(error)
        }
      })
    })
  })
}
