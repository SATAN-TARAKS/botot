exports.run = (bot, message, args) => {

let params = message.content.split(" ").slice(1)
let messagecount = parseInt(params[0]);

    if (params > 100) return message.reply("The maximum amount of messages is '100'")
    if (params <= 1) return message.reply("The minimum amount of messages is '2'")
    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {
      message.channel.fetchMessages({ limit: messagecount })
        .then(messages => message.channel.bulkDelete(messages)).catch(console.error)
    }
    else {
      message.reply("**YOU ARE NOT QUALIFIED TO USE THIS COMMAND**");
    }

}