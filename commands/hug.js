exports.run = (bot, message, args) => {

let randomArray = (hugs[Math.floor(Math.random() * hugs.length)]);
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + randomArray);

}