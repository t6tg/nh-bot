const rp = require("request-promise");
const $ = require("cheerio");

const data = (message, code) => {
  const url = `https://nhentai.net/g/${code}`;
  rp(url)
    .then(function (html) {
      const name = $(".before", html).text();
      const image = $("#cover > a > img", html)[0].attribs["data-src"];
      console.log(image);
      const channel = message.guild.channels.cache.find(
        (ch) => ch.name === "bot-test"
      );
      const exampleEmbed = {
        color: 0xd41717,
        title: name,
        url: "https://discord.js.org",
        author: {
          name: "nHentai",
          icon_url:
            "https://pbs.twimg.com/profile_images/733172726731415552/8P68F-_I_400x400.jpg",
          url: `https://nhentai.net/g/${code}`,
        },
        description: "Some description here",
        thumbnail: {
          url: `${image}`,
        },
        fields: [
          {
            name: "Regular field title",
            value: "Some value here",
          },
          {
            name: "\u200b",
            value: "\u200b",
            inline: false,
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true,
          },
        ],
        image: {
          url: "https://i.imgur.com/wSTFkRM.png",
        },
        timestamp: new Date(),
        footer: {
          text: "Some footer text here",
          icon_url: "https://i.imgur.com/wSTFkRM.png",
        },
      };
      channel.send({ embed: exampleEmbed });
    })
    .catch(function (err) {
      message.reply("Not Found....");
      throw err();
    });
};

module.exports = { data };
