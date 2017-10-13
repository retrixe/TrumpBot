# TrumpBot for Discord and Slack

TrumpBot is an innovative bot which triggers when Donald J. Trump, the most brilliant man ever born, and the deserving 45th President of the United Statss of America, blesses us with tweets. When @realDonaldTrump will tweet, this cutting-edge bot automatically gets triggered and sends your Discord/Slack a message.

Like Donald J. Trump's tweets, written in a hurry, this README was. Indeed, rewritten, it will be.

The obligatory #FakeNews hashtag which invoked must be when mentioning the legendary tweets of Trump.

Still a WIP :(

- Still need to support Slack.
- Still need to support Discord.

## Development

- Use ESLint.

***Scripts***

- `yarn start`- Starts the bot in production mode.
- `yarn dev`- Starts the bot in development mode with nodemon.
- `yarn retrieveBearerToken`- Retrieves your bearer token from the consumer key and consumer secret provided in config.json.

### config.json

```json
{
  "consumer_key": "",
  "consumer_secret": "",
  "bearer_token": ""
}
```

You can fill in the config.json's first 2 field and then run `yarn retrieveBearerToken` to retrieve your bearer token :o

This file must be present in the root directory.