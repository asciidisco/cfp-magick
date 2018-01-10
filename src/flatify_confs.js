// turns incoming nested array conferences into a flat array
module.exports = conferences => {
  let allConfs = []
  conferences.forEach(confs => confs.forEach(conf => allConfs.push(conf)))
  return allConfs
}
