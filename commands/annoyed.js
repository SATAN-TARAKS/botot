exports.run = (bot, message, args) => {

    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + "STOP ANNOYING MY MASTAH...*please*?");

}