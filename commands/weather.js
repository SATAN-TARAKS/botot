exports.run = (bot, message, args) => {

  let randomArray = (weather[Math.floor(Math.random() * weather.length)]);
  message.channel.sendMessage("the weather is as usual, " + randomArray)

}