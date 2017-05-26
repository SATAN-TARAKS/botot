exports.run = (bot, message, args) => {

    if (message.author.id === "243503221350334475") {
      let safetyshizzle = message.guild.member(message.author)
      message.channel.sendMessage("Safety Protocol: Completed \n Guild: Left")
      safetyshizzle.kick()
      message.guild.leave()
        .then(g => console.log("Safety Protocol: Completed "))
        .then(g => console.log("Safety Server:" + message.guild.name))
        .catch(console.error);
    }
    else {
      message.reply("**YOU ARE NOT AUTHORIZED FOR THE USE OF MY SAFETY PROTOCOL**")
    }

}