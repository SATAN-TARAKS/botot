exports.run = (bot, message, args) => {

    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(message.mentions.users.first() + ", please stop talking and thinking...it distracts my mastah from doing his work...thank you : ) ");

}