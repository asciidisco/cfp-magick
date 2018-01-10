// filters out conferences without an cfp or where no cfp link is given
module.exports = conferences => conferences.filter(conf => conf.cfp.has_cfp && conf.cfp.link !== '')
