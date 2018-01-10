// turns object based nested conf data into an array
module.exports = conferences => Object.keys(conferences).map(month => conferences[month])
