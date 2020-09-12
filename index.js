const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.once("ready", () => {
  console.log("Ready..!");
  client.user.setActivity("MasterH 💋", {
    type: "WATCHING",
    url: "https://h.t6tg.com",
  }); // set up Status Bot
});
client.login(config.DISCORD_TOKEN);
