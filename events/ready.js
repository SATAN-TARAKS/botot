exports.run = (bot) => {

bot.on("ready", () => {
  bot.user.setGame("*help | *invite")

  console.log("I am ready!");});

}