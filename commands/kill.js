exports.run = (bot, message, args) => {

let killArray = (kills[Math.floor(Math.random() * kills.length)]);
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + killArray);

}