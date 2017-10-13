// Require node-twitter.
import Twitter from 'twitter'
// Require a configuration from config.json.
import config from './config.json'

// Create a new client.
const TwitterClient = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  bearer_token: config.bearer_token
})
