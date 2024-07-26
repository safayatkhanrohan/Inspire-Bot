const { Client, IntentsBitField } = require("discord.js");
const app = require("express")();

require("dotenv").config();
const client = new Client({
  intents: [
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  msg.reply("Thanks for the message !");
});

client.login(process.env.TOKEN);

app.get("/", (req, res) => {
  res.send("!Working");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
