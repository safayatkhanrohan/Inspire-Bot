const { Client, IntentsBitField } = require("discord.js");
const app = require("express")();
require("dotenv").config();

const quotes = require("./quotes");

const client = new Client({
  intents: [
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.MessageContent,
  ],
});

const sadWords = [
  "sad",
  "depressed",
  "unhappy",
  "miserable",
  "down",
  "melancholy",
  "gloomy",
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  let isSad = false;

  // check if msg.cotent has something sad

  const tempMsg = msg.content.split(" ");

  tempMsg.forEach((tempWord) => {
    sadWords.forEach((word) => {
      if (word === tempWord) {
        isSad = true;
      }
    });
  });

  if (isSad) {
    randomNum = Math.floor(Math.random() * 76);
    await msg.reply(`
I'm sorry you're feeling this way. Sometimes a few words of encouragement can help. 

Here’s a quote to lift your spirits:

"${quotes[randomNum].quote}" 
- ${quotes[randomNum].author}
`);
    return;
  }

  await msg.reply("Thanks for you message. Have a nice day!");
});

client.login(process.env.TOKEN);

app.get("/", (req, res) => {
  res.send("Bot is runnig");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
