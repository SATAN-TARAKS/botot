exports.run = (bot, message, args) => {

    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage("**" + args.join(' ') + "** \n" + insults[Math.floor(Math.random() * insults.length)]);

}