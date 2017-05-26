exports.run = (bot, message, args) => {

    message.channel.sendMessage(hello1[Math.floor(Math.random() * hello1.length)]);
    message.channel.sendMessage(hello2[Math.floor(Math.random() * hello2.length)]);
    message.channel.sendMessage(first1[Math.floor(Math.random() * first1.length)]);
    message.channel.sendMessage(first2[Math.floor(Math.random() * first2.length)]);
    message.channel.sendMessage(second1[Math.floor(Math.random() * second1.length)]);
    message.channel.sendMessage(second2[Math.floor(Math.random() * second2.length)]);
    message.channel.sendMessage(third1[Math.floor(Math.random() * third1.length)]);
    message.channel.sendMessage(third2[Math.floor(Math.random() * third2.length)]);
    message.channel.sendMessage(fourth1[Math.floor(Math.random() * fourth1.length)]);
    message.channel.sendMessage(fourth2[Math.floor(Math.random() * fourth2.length)]);
    message.channel.sendMessage(fifth1[Math.floor(Math.random() * fifth1.length)]);
    message.channel.sendMessage(fifth2[Math.floor(Math.random() * fifth2.length)]);

}