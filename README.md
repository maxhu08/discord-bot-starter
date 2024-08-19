# discord-bot-starter

## info

A simple template for creating a discord bot.

## getting-started

Create a discord bot on the discord developer portal [here](https://discord.com/developers/applications).

```shell
git clone https://github.com/maxhu08/discord-bot-starter
cd discord-bot-starter
bun i
```

Get your bot's token & client id from the developer portal page. Create a `.env` file with this structure and fill the BOT_TOKEN & CLIENT_ID with your bot's values.

```python
# .env
BOT_TOKEN="..."
CLIENT_ID="..."
```

Go to `https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot&permissions=0` to invite your bot to your server.

Start the bot by running:

```shell
bun start
```

That's it! Try running `/ping`!
