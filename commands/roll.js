exports.run = (bot, message, args) => {

    message.reply(dice[Math.floor(Math.random() * dice.length)]);

}