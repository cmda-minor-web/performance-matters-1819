const chalk = require('chalk')

let history = []

const add = item => {
  let add = true

  // Check for duplicate
  history.forEach(i => {
    if (i.name === item.name) {
      add = false

      console.log(chalk.red(`duplicate found for ${i.name}`))
    }
  })

  if (add) {
    return history.push(item)
  }
}

const get = () => {
  return history
}

const clear = () => {
  history = []
  return 'done'
}

exports.clear = clear
exports.add = add
exports.get = get
