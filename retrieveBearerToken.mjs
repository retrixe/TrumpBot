// Get HTTP module and config.
import https from 'https'
import config from './config.json'
// Import query string.
import querystring from 'querystring'
// Import btoa.
import btoa from 'btoa'

// Make a request.
const req = https.request({
  hostname: 'api.twitter.com',
  method: 'POST',
  path: '/oauth2/token',
  headers: {
    Authorization: `Basic ${btoa(`${config.consumer_key}:${config.consumer_secret}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}, (res) => {
  console.log(`STATUS: ${res.statusCode}`)
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
    console.log(`\nBEARER TOKEN: ${JSON.parse(chunk)['access_token']}`)
  })
  res.on('end', () => {
    console.log('No more data in response.')
  })
})

// Initiate it.
req.write(querystring.stringify({
  'grant_type': 'client_credentials'
}))
req.end()
