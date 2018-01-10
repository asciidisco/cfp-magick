const filterByCfp = require('./filter_by_cfp')
const arrifyConfs = require('./arryify_confs')
const flatifyConfs = require('./flatify_confs')

// turns nested conferences data into filtered flat array data
module.exports = conferenceData => filterByCfp(flatifyConfs(arrifyConfs(conferenceData)))
