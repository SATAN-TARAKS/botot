exports.run = (bot, message, args) => {

let fuck = ("I dont fuck with kids older than 8 and i also dont want aids so are you qualified?")

    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + fuck);

}