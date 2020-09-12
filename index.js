const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { data } = require("./nhentai/fetch");
const prefix = "!";

client.once("ready", () => {
  console.log("Ready..!");
  client.user.setActivity("MasterH 💋", {
    type: "WATCHING",
    url: "https://h.t6tg.com",
  }); // set up Status Bot
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  console.log(args[0]);
  if (command === "ns" && args[0] != null) {
    try {
      data(message, args[0]);
    } catch (error) {
      console.log(error);
    }
  } else if (command === "h") {
    const mh = "!ns code [ search from hentai ]";
    message.reply(mh);
  }
});

client.login(config.DISCORD_TOKEN);
