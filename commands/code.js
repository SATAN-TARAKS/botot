exports.run = (bot, message, args) => {

    message.channel.sendMessage("`https://hastebin.com/ahuduqoseh.tex`")
    message.author.sendFile("/data03/virt51945/botot/encryption.jpeg")
    message.author.sendFile("/data03/virt51945/botot/decryption.jpeg")
    message.channel.sendMessage("`format:` **Name Surname, day month year** (Jul. Cal.)")
      .then(() => {

        message.channel.awaitMessages(response => response.content === "Nikola Tesla, 28 June 1856", {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
          .then((collected) => {
            message.channel.sendMessage("Code TimeOut ")
            message.author.sendMessage(`10:60\n7:48\n28:1\n31:6\n2:20\n12:15\n9:240`);
            message.author.sendMessage("https://mega.nz/#!FbImEQhA!IgpW6O37jOQjbW_t56uMTF2ZKqtv4zLDpdXyvRKdzSc")
          })
          .catch(() => {
            message.channel.sendMessage('Code TimeOut ');
            message.author.sendMessage("TimeOut!")
          });
      });
      
}