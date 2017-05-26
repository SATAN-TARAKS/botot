exports.run = (bot, message, args) => {

    message.reply(roulette[Math.floor(Math.random() * roulette.length)]);

}