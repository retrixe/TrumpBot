// Require node-twitter.
import Twitter from 'twitter'
// Require a configuration from config.json.
import config from './config.json'

// Create a new client.
const client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  bearer_token: config.bearer_token
})

// Get a Trump tweet, god.
client.get("statuses/user_timeline", {
  "screen_name": "realDonaldTrump",
  count: 1
}).then((tweet) => console.log(tweet))
