exports.run = (bot, message, args) => {

let rape = ("*rapes yo-...* wait a minute... I didnt sign up for this *calls the police*")

    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + rape);

}