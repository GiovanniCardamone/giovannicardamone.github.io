const path = require('path')

module.exports = (dir) => {
  return {
    ':components': path.resolve(dir, 'components/'),
    ':routes': path.resolve(dir, 'routes/'),
  }
}
