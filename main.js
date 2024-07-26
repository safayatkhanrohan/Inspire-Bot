const { Client, IntentsBitField } = require("discord.js");

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
  console.log(msg.content);
  if (msg.author.bot) return;
  msg.reply("Thanks for the message !");
});

client.login(process.env.TOKEN);
