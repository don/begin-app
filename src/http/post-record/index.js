// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

let data = require('@begin/data')

exports.handler = async function http(req) {
  console.log(req)

  let table = 'foo'
  // let key = 'The Key'
  // let value = `Some Value`
  let key = req.body.key
  let value = req.body.value
  await data.set({table, key, value})

  return {
    status: 302,
    location: '/'
  }
}
