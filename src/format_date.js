// formats a raw date
module.exports = rawDate => {
  const parsedDate = new Date(rawDate)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return parsedDate.toLocaleDateString('en-gb', options)
}
