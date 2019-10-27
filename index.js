require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready to flag!");
});

const forbiddenLetter = "e";
const reaction = "🏴";

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().includes(forbiddenLetter)) {
    message.react(reaction);
  }
});

client.login();
