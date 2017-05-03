//const
 const Discord = require("discord.js");
 const bot = new Discord.Client();
 const Client = require('discord.js').Client;
 const config = require("/data03/virt51945/botot/config.json");
 const client = new Client();
 const fs = require("fs");
 const sql = require('sqlite');
//lets
 let selfkills = ['sure bend over...oh..you wanted to kill yourself?...okay `kills you`', 'what happened? did ya mom delete your candy crush app? did you lose your ego? were you not allowed to play on your playstation 4? did your mom take your phone? or are you just retarded? guess im just making the avarage iq higher by doing this... `kills you`']
 let kills = ['kill yourself...*asked kindly*', 'stop breathing! By breathing you are polluting the world!', 'do you hear that? *silence*...just like you should be...all the time...in a coffin...under the ground...dead', '**a dark object appears**...`watch out he got a big black    dildo` *hits you to death with a dildo*', 'you may choose how I end your life: either get fucked anally till you die, oooooooor you could just go do it yourself and fuck yourself till death (people may be watching....probably)',]
 let hugs = ['hugs you so hard your chest gets crushed by the force of love < 3', 'tries to punch you...ends up hugging you', 'HUUUUUUUUUUUUUUUUUUG MEEEEEEEEEEE SENPAI', 'hugs you', 'wraps arms around you in a way you humans call hugging', 'accidentally breaks your ribs while hugging you...*sorry*']
 let roulette = ['hey look...you have a big hole in your head...that looks dangerous...go see a doctor...', 'damnit. stop shooting yourself *cleans up your brains that are scattered all over the place*', 'i didnt hear a bang...`bang`...oh nvm there it was', 'hey look you`re still alive!!! : ) **kills you**', 'click']
 let hello1 = ["**hello**", "**hi**", "**ugh...its you again**", "**wow didn't see you coming...oh yeah hello**"]
 let hello2 = ["*hello*", "*heya*", "*oh no...it saw me...*", "*great...its you again...*", "*HIIIIIIII SENPAI*"]
 let first1 = ["**did i do something wrong?**", "**hey look its you! welcome back**"]
 let first2 = ["*yes*", "*yes...*"]
 let second1 = ["**why are you sad? what did i do???**", "**you're always so salty...you should see a doctor**"]
 let second2 = ["*it was you that killed it....it's all your fault damnit...look at what you've done...please stop this already*", "*you just couldn't let it live, could you?*", "*this is all your fault...idiot...BAKA...*"]
 let third1 = ["**you blaming me again for killing mastah's chat?**", "**i didn't kill the chat....that was you, you sick fuck trying to blame me for it....look at all the people going offline. It's all your fault**"]
 let third2 = ["*why do you make me cry everytime? it's not nice you know...*`cries`", "*why do you make me cry everytime? it's not nice you know....*`cries`"]
 let fourth1 = ["**okay i'm done with your bullshit...you should pull yourself together..you stupid little faggot...**", "**hey im sorry okay? BUT DON'T FUCKING BLAME ME FOR EVERYTHING!!!!!**"]
 let fourth2 = ["*uhm i guess we should get a divorce...*", "*I HATE YOU...I'M LEAVING YOU*"]
 let fifth1 = ["**great that makes two of us**", "**finally!**", "**why are you still here...go cry in a corner or something i dont want to se your face EVER AGAIN...**"]
 let fifth2 = ["*i'm going*", '*yes please go*']
 let insults = ['Roses are red, violets are blue...god made me pretty what happened to you?', 'can you stop talking please?...you lower the iq of the whole server', 'did ya know that 100% of the people that see you die? thats the kind of bad guy you are....go kys', 'roses are red violets are blue trump and your mom...made you', "( ͡° ͜ʖ ͡°)              ( ͡° ͜ʖ ͡°)           ( ͡° ͜ʖ ͡°)                  ( ͡° ͜ʖ ͡°)                ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°) \n( ͡° ͜ʖ ͡°)          ( ͡° ͜ʖ ͡°)                    ( ͡° ͜ʖ ͡°)        ( ͡° ͜ʖ ͡°)              ( ͡° ͜ʖ ͡°)              ( ͡° ͜ʖ ͡°)\n( ͡° ͜ʖ ͡°)      ( ͡° ͜ʖ ͡°)                            ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)                  ( ͡° ͜ʖ ͡°)\n( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°)                                       ( ͡° ͜ʖ ͡°)                                ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)\n( ͡° ͜ʖ ͡°)      ( ͡° ͜ʖ ͡°)                                  ( ͡° ͜ʖ ͡°)                                                   ( ͡° ͜ʖ ͡°)\n( ͡° ͜ʖ ͡°)          ( ͡° ͜ʖ ͡°)                              ( ͡° ͜ʖ ͡°)                        ( ͡° ͜ʖ ͡°)              ( ͡° ͜ʖ ͡°)\n( ͡° ͜ʖ ͡°)             ( ͡° ͜ʖ ͡°)                           ( ͡° ͜ʖ ͡°)                                ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)"];
 let disclaimer = ["**NOTE:** \n ``` \n when feeling down or depressed, killing yourself is not the answer. Things that help: \n - Chat with trained HopeCoaches on 'https://www.thehopeline.com/gethelp' page.  You can also download TheHopeLine app to reach out for help in an instant. \n - Call or chat with the Suicide Prevention LifeLine at 1-800-273-8255 or www.suicidepreventionlifeline.org. \n Don't do it!```"]
 let dice = ["1", "2", "3", "4", "5", "6"]
 let random = ["http://i.memeful.com/media/post/PM02BEd_700wa_0.gif", "http://i.memeful.com/media/post/1RXY1bd_700wa_0.gif", "http://i.memeful.com/media/post/kRp6z2w_700wa_0.gif", "", "http://i.memeful.com/media/post/BRkjB6M_700wa_0.gif", "http://i.memeful.com/media/post/ER5rbyd_700wa_0.gif", "http://i.memeful.com/media/post/1RXbZwp_700wa_0.gif", "http://i.memeful.com/media/post/oMJ28xM_700wa_0.gif", "http://i.memeful.com/media/post/1RXGWZM_700wa_0.gif", "http://i.memeful.com/media/post/WwlrNpR_700wa_0.gif", "http://i.memeful.com/media/post/kRQBx2d_700wa_0.gif", "http://i.memeful.com/media/post/Xw7pxGM_700wa_0.gif", "http://i.memeful.com/media/post/9d6Nqdp_700wa_0.gif", "http://i.memeful.com/media/post/kRp69bw_700wa_0.gif", "http://i.memeful.com/media/post/3dBOAEw_700wa_0.gif", "http://i.memeful.com/media/post/NwrLG6R_700wa_0.gif", "http://i.memeful.com/media/post/oMJNPM9_700wa_0.gif", "http://i.memeful.com/media/post/GwDA4qM_700wa_2.gif", "http://i.memeful.com/media/post/4wbkVXM_700wa_0.gif", "http://i.memeful.com/media/post/KWwlNRE_700wa_0.gif", "http://i.memeful.com/media/post/mRPm10d_700wa_0.gif", "http://i.memeful.com/media/post/BdqbnWw_700wa_0.gif", "http://i.memeful.com/media/post/BdqpZRW_700wa_0.gif", "http://i.memeful.com/media/post/YMKg8rM_700wa_0.gif", "http://i.memeful.com/media/post/kRpL6bR_700w_0.jpg"]
 let snekfetch = require('snekfetch');
 let url = "https://discordbots.org/api/bots/256885622944432129/stats"
 let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MzUwMzIyMTM1MDMzNDQ3NSIsImlhdCI6MTQ5MzMyNDcyOX0.P3MFPihdfoOCMP3yjYNO5vlsXdBzCyqmLrg5sVkxw9gs"

bot.on("guildCreate", guild => {
  snekfetch.post("https://discordbots.org/api/bots/256885622944432129/stats")
  .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MzUwMzIyMTM1MDMzNDQ3NSIsImlhdCI6MTQ5MzMyNTA0Mn0.tx-MN-S7ojiflFUcn7hyLRFAj_oEdAyKYpvFm_gucgA")
  .send({ server_count: bot.guilds.size })
  .then(console.log('Updated dbots.org status.'))})
bot.on("guildDelete", guild => {
  snekfetch.post("https://discordbots.org/api/bots/256885622944432129/stats")
  .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MzUwMzIyMTM1MDMzNDQ3NSIsImlhdCI6MTQ5MzMyNTA0Mn0.tx-MN-S7ojiflFUcn7hyLRFAj_oEdAyKYpvFm_gucgA")
  .send({ server_count: bot.guilds.size })
  .then(console.log('Updated dbots.org status.'))})
bot.on("ready", () => {
  bot.user.setGame("*help | *invite")

  console.log("I am ready!");});

bot.on("message", message => {
if (message.channel.name === "forum_ooc") return;
if (message.author.bot) return;
if (!message.guild) {
    message.author.sendMessage("please do not use DM's for this command!")
    return;}
if (message.content === "fuck you") {
    message.channel.sendMessage("yes please ( ͡° ͜ʖ ͡°)")
  }
if (message.content === "la la la") {
    message.channel.sendMessage("stop saying that tifennie")
  }

if (message.content === "who is satan?") {
    message.channel.sendMessage("the creator of this bot")
  }
if (message.content === "why not?") {
    message.channel.sendMessage("https://tenor.co/s6Ng.gif")
  }
if (message.content === "Fuck you") {
    message.channel.sendMessage("yes please ( ͡° ͜ʖ ͡°)")
  }
if (message.content === "bye") {
    message.channel.sendMessage("bye...we all love you...except your parents, they hate you, they think you are a failure to the family. : )");
  }
if (message.content === "that's gay") {
    message.channel.sendMessage("http://i.memeful.com/media/post/lwmkBLR_700wa_0.gif");
  }
if (message.content === "that's racist") {
    message.channel.sendMessage("http://i.memeful.com/media/post/BdqbnWw_700wa_0.gif");
  }
if (message.content === "what is the answer to all questions in the universe? ~~implying on a meme: 42~~") {
    message.channel.sendMessage("42")
  }
let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length || config.prefixalt.lenght);

if (command === "proof") {
    if (message.author.id === "243503221350334475") {
      message.reply(" hello satan, my master")
    }
    else {
      message.reply(" wait a minute...you are not my master **GO AWAY** ")
    }
  };
if (command === "loli") {
    if (message.author.id === "163339749631721472") {
      message.channel.sendMessage(message.author.avatarURL);
    }
    else {
      message.reply("HEY HEY HEY, ~~loli is fun~~ you pedo!")
    }
  };
if (command === "help") {
  let FunEmbed = new Discord.RichEmbed()
  .setTitle("FUN COMMANDS")
  .addField("cry", "now you can cry")
  .addField("okay", "okay GIF")
  .addField("silence", "when you just want someone to stfu")
  .addField("r@pe", "rape someone")
  .addField("hug(s)", "hug someone")
  .addField("roll", "roll the dice and test your luck")
  .addField("roulette", "spin the barrel and test your luck")
  .addField("revive", "try and revive the chat")
  .addField("bonus_duck", "???")
  .addField("km5", "kys, silently")
  .addField("insult", "insult someone")
  .addField("facepalm", "facepalm GIF")
  .addField("shrug", "¯\\_(ツ)_/¯")
  .addField("lenny", "you know what to do...( ͡° ͜ʖ ͡°)")
  .addField("why", "why not?")
  .addField("random", "random GIF")
  .addField("chat", "tag a random person to annoy them or to chat")
  .addField("lennyception", "( ͡° ͜ʖ ͡°) same as this but more")
  .addField("wow", "wow GIF (btw I made this gif)")
  .addField("say", "try it!")
  .setColor(0x0FFF255)
  .setThumbnail(bot.avatarURL)
  message.author.sendEmbed(FunEmbed)
  let adminembed = new Discord.RichEmbed()
  .setTitle("ADMIN COMMANDS")
  .addField("delete", "deletes a specified amount of messages.")
  .addField("mute","mutes a member.")
  .addField("unmute", "unmutes a muted person.")
  .addField("invitepls", "generates an invite for the channel you are on (code).")
  .addField("invitelink", "generates an invite link. Note: this does not work with anti-ad bots...use *invitepls for this. :)")
  .addField("kick", "kicks a member.")
  .addField("warn", "warns a member.")
  .addField("status", "the bot's current status.")
  .addField("sayd", "same as *say but now it deletes the command.")
  .setColor(0x0FFF255)
  .setThumbnail(message.author.avatarURL)
  message.author.sendEmbed(adminembed)
  message.channel.sendMessage("Check your DM's")}
if (command === "fund") {
    message.channel.sendMessage("Check your DM's")
    message.author.sendMessage("I really honestly appreciate you thinking about helping me keep my bot up...really really do! thank you \n oh yeah the link to my Patreon if you actually consider donating \n https://www.patreon.com/candyFromHell \n thank you : )")
  }
if (command === "iwonderifsomeonewillfindthis") {
    message.reply(", congrats")
  }
if (command === "status") {
    const statusembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField("servers", bot.guilds.size)
      .addField("uptime", bot.readyAt)
      .addField("users", bot.guilds.reduce((p, c) => p + c.memberCount, 0))
    message.channel.sendEmbed(statusembed)
  }
if (command === "lennyception") {
    message.channel.sendFile("/data03/virt51945/botot/lenn.gif")
  }

if (command === "random") {
    message.channel.sendMessage(random[Math.floor(Math.random() * random.length)]);
  }

if (command === "cry") {
    message.channel.sendMessage("http://i.memeful.com/media/post/9d6Kxjw_700wa_0.gif")
  }
if (command === "invitepls") {
    message.channel.createInvite()
      .then(invite => message.reply("`" + invite.code + "`" + "here use this code : )"))
      .catch(error => console.error(error));
  }
if (command === "invitelink") {
    message.channel.createInvite()
      .then(invite => message.reply("<" + invite + ">" + "here use this "))
      .catch(error => console.error(error));
  }
if (command === "wow") {
    message.channel.sendFile("/data03/virt51945/botot/wow.gif")
  }
if (command === "okay") {
    message.channel.sendMessage("https://giphy.com/gifs/boy-meets-world-agree-yes-10pR6dUXHBpZSg ");
  }
if (command === "invite") {
    message.author.sendMessage("bot invite: https://discordapp.com/oauth2/authorize?permissions=2146958463&scope=bot&client_id=256885622944432129");
    message.author.sendMessage("support server invite: https://discord.gg/nQZ6sfy")
    message.channel.sendMessage("Check your DM's")
  }
if (command === "neo") {
    message.channel.sendMessage("neo is someone who needs love...please donate me 10$ via paypal or western union i promise i will deliver the money to neo ~~haha they don't know i will never give it to neo~~")
  }
if (command === "roll") {
    message.reply(dice[Math.floor(Math.random() * dice.length)]);
  }
if (command === "satan") {
    message.channel.sendMessage("the creator of this bot...aka the coolest dude 'living' on 'earth'");
  }
if (command === "why") {
    message.channel.sendMessage("https://tenor.co/yfZR.gif");
  }
if (command === "shrug") {
    message.channel.sendMessage("(ツ)....help i have no hands");
  }
if (command === "annoyed") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + "STOP ANNOYING MY MASTAH...*please*?");
  }
if (command === "lenny") {
    message.delete()
    message.channel.sendMessage("​( ͡° ͜ʖ ͡°)");
  }
if (command === "chat") {
  let guild = message.guild
  if (guild.name === "Neko Paradise") return;

    message.channel.sendMessage(message.guild.members.random().toString() + ", hi haven’t talked in a while  \n  hows life?")
  }
if (command === "silence") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(message.mentions.users.first() + ", please stop talking and thinking...it distracts my mastah from doing his work...thank you : ) ");
  }
if (command === 'stories') {
    message.channel.sendMessage("-story,horror,mini");
    message.channel.sendMessage("-story,horror,short");
    message.channel.sendMessage("-story,horror,medium");
    message.channel.sendMessage("-story,horror,long");
  }
if (command === "imsorrytree") {
    message.channel.sendMessage("tree, he really is sorry")
  }
if (command === 'roulette') {
    message.reply(roulette[Math.floor(Math.random() * roulette.length)]);
  }
if (command === "no") {
    message.channel.sendMessage("https://tenor.co/FP5M.gif")
  }
if (command === 'revive') {

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
if (command === "facepalm") {
    message.channel.sendMessage("https://tenor.co/rYfe.gif ")
    message.channel.sendMessage("https://discordapp.com/api/emojis/239466236164046848.png")
  }
if (command === "derpivia") {
  message.member.setNickname("Derpivia")}
if (command === "story,horror,mini") {
    message.channel.sendMessage("She made a playful squeal as I tagged her. It was clear she was enjoying herself, she was laughing herself to tears. 'Daddy, stop it, my sides hurt!' She continued to laugh. Her joy was contagious, I smiled, for once in years, I smiled. I dare say I’ve smiled more that day than I have in my entire life. Alas, all good things must come to an end, she was tired, and fell asleep shortly after. My wife soon came home. She was so glad to see me, she yelled my name, again, laughing to tears. She hugged me, still laughing. I continued to smile. She looked down and saw my tagging tool, quickly shooting her focus back to my eyes. I continued to smile. 'Michael…' Tears continued to stream down her face in excitement. 'How could you have done this to our little angel?' She tried to run, but she was too slow. 'Tag…' I smiled intensively. 'You’re it.'")
  }
if (command === "story,horror,short") {
    message.channel.sendMessage("I’d actually seen him on our way home from school. He looked dirty and disturbed, and stared straight at us as our bus went by. We even made jokes about him, probably as our way of pretending we weren’t afraid. He was incredibly out of place in our middle class suburb, so his mere presence felt threatening… thus our panic when the three of us got off at our stop and saw him at the corner, about to look in our direction.")
    message.channel.sendMessage("He was between us and our houses, and the bus had already pulled away, so we bolted for the bushes of a nearby yard. We weren’t sure if he had seen us, but we peered through the leaves and saw him stalking our way, muttering randomly. Tim, my neighbor, insisted that  he’d seen a large knife in the man’s ragged clothing. Danny, a kid I hardly knew who had just moved into the neighborhood, insisted that he was imagining it – that Tim’s glasses must have reflected the sun wrong or something. Still, we were terrified, and the sidewalk was going to bring him right by us.")
    message.channel.sendMessage("It was Tim that broke and ran first, keeping low. I followed, my heart pounding, as we dove into the darkness underneath the porch of the unfamiliar house we’d been hiding near. As we squeezed our bodies against the dirt, the grimy wood pressed into our backs, barely giving us enough room to breathe. From our hiding place, we could see the disturbed man turn into the yard in front of us and begin searching around, hitting the bushes and muttering angrily.")
    message.channel.sendMessage("I realized then that Danny wasn’t with us, but I hadn’t seen where he’d gone. Tim had lost his glasses back at the bushes, and he just huddled in the shadows next to me in near-blind terror. We stayed there in silence, waiting. Every so often, whenever I almost thought it was safe to come out, footsteps would creep across the wooden porch above us. Tim almost sneezed, once, but I covered his mouth and nose in stark fear.")
    message.channel.sendMessage("We waited there so long that the tone of the sunlight began to change. We hadn’t heard the man searching about in awhile, and I was just getting ready to peek out, when footsteps clattered and a thud hit the wood directly above us. A split second later, Danny’s face appeared in front of us upside down, and he looked at us through the lattice. A look of shock and surprise crossed his features at finally finding us. He whispered something, but I couldn’t hear anything. He seemed to be saying “come closer,” so I figured the horrible man was still around and we had to be quiet, and I inched forward.")
    message.channel.sendMessage("Danny’s features grew fearful, and he kept indicating something above us. Strangely, I still couldn’t hear him… his eyes seemed to dim then, and I inched forward a little bit more. I froze for a moment in horror, then backed up. Tim mouthed to me: “What did he say?” and I just shook my head, completely in shock. Danny hadn’t conveyed “come closer,” he had mimed “he’s up there.” The drifter was unknowingly sitting right above us, waiting, because he knew we had to be somewhere in that yard.")
    message.channel.sendMessage("There was nothing to do but wait in silence, trying not to scream. I was glad Tim had lost his glasses. I lay there as darkness descended, waiting in unwavering terror and trying not to feel the glassy stare of Danny’s severed head as it rested in the grass a foot away.")
  }
if (command === "story,horror,medium") {

    message.channel.sendMessage("In 1998 I got a new teaching job in a new town. To save money I moved into a small house that was for rent. My roommate, Claire, was nice enough and the two of us got along easily. I moved in and found my room. While unpacking I came across an old framed photograph. Three men dressed as hospital orderlies were sitting together in the living room of the house. These three men had once lived in the house I was now renting with Claire. I didn’t want to throw away the photograph, it didn’t seem right. But I didn’t want to keep it, either. I chose to hang the picture up in the living room as decoration and a reminder of the friendship that once bloomed in the house.")
    message.channel.sendMessage("On the first night I was awakened by Claire stumbling around in the dark in my bedroom. Flipping on the lights I saw Claire and realized that she was sleep walking. I called her name and finally woke Claire up and she, confused by what had happened, apologized and told me that she had never slept walked before. ")
    message.channel.sendMessage("Claire was shaking, she then went on to explain that she was having a vivid and bizarre dream. In her dream she was in a hospital and a woman, a patient, was holding her hand and leading her down the hallway as if the woman wanted Claire to see something.")
    message.channel.sendMessage("The next morning I went for a jog and spied an abandoned building a few blocks away from my house. The building was massive, the windows broken and the doors chained. There were no signs on the outside of the building but by all outward appearances it looked like a hospital. I was staring at the building as if in a trance when I noticed that there was something, or someone looking back at me from the fifth floor window. As soon as I made eye contact it disappeared. ")
    message.channel.sendMessage("The whole area, the building and the quiet creeped me out. I ran for home.")
    message.channel.sendMessage("That night Claire and I sat down together to watch a movie, drink some wine and talk. When I brought up my crazy ex-boyfriend Claire laughed a little. She remarked that my ex sounded like her during her wilder days. She went on to tell me that she had a mental break down a few years ago and that she was on medication, but she was better now and it was all behind her. Her story sent a chill up my spine. I barely knew her and I now I learn about this.")
    message.channel.sendMessage("Later when I went to bed a heard a crash outside my window. I threw back the curtain and saw Claire walking off the porch, breaking a flower pot as she moved. I opened my window and yelled her name but she didn’t respond. Claire was walking down the street toward the abandoned hospital, sleep walking, her hand out stretched as if she was being guided by some unseen force.")
    message.channel.sendMessage("I threw on some clothes and ran outside the house still calling Claire’s name. By the time I caught up to her she was stepping inside the hospital doors. Someone had unchained the doors.")
    message.channel.sendMessage("I was too afraid to walk inside the hospital after her, I hesitated and I regret it to this day.")
    message.channel.sendMessage("When I finally worked up the nerve to walk inside I was greeted by an elderly homeless woman. I asked her if she had seen anyone come into the hospital just now and all she did was smile at me and turn away. I panicked and stepped back outside, the foreboding feeling was overwhelming. ")
    message.channel.sendMessage("I looked up at the hospital and saw Claire hanging out a window on the fifth floor. I yelled her name but I couldn’t get her attention. I’ll never forget the look on her face: pure terror. Clair kept leaning out the window and looking back into the hospital as if she was afraid of someone or something. Sometimes she’d look down, seemingly straight at me, but she still never saw me.")
    message.channel.sendMessage("I called her name desperately as I watched her climb out through the window and jump. She died in front of me.")
    message.channel.sendMessage("The police arrived and I told them everything about Claire’s sleep walking. But when they learned about her history of mental illness they quickly chalked it up to a suicide and that was the end of her story.")
    message.channel.sendMessage("A week later I read her obituary in the newspaper and in the article they confirmed that the abandoned hospital was in fact a hospital. A mental hospital.")
    message.channel.sendMessage("I fell asleep that night I had a very strange dream. I was walking down the hall of a hospital, a woman in a hospital gown holding my hand. She was guiding me somewhere and she kept looking back to make sure I was still following.")
    message.channel.sendMessage("The snapping of fingers and a man’s voice startled me awake. I had been dreaming. I had been sleep walking. I had walked the four blocks from my house to the street of the abandoned hospital. A man had almost hit me with his car. If he hadn’t of woken me up I’m not sure what wouldn’t happened.")
    message.channel.sendMessage("The idea of sleep was now terrifying. So much had happened in such little time I tried to keep awake for as long as possible. But eventually, as it often does, sleep overtook me. The dream, the same dream about being in the hospital, repeated. This time when I woke up however I wasn’t in my bed or standing in the street. I was laying the bedframe of an old cot inside the hospital.")
    message.channel.sendMessage("Scared I walked through the halls trying to find the stairs and get out, but I found nothing. I heard muffled voices and screams coming from all the empty rooms that lined the halls. I rounded a corner and came face to face with three people all dressed as patients. One patient was the woman from my dream. I backed away and told myself they weren’t real, if I ignored them they’d go away. ")
    message.channel.sendMessage("I kept searching for the exit and heard another screaming voice from behind a door. There was an orange glow creeping out from under the door and through the small window on the door. I peeked inside and a man’s face peeked back. His face was burned, horribly burned! He begged me to let him out but I couldn’t bring myself to touch the door. I turned and saw the same three patients as I had before.")
    message.channel.sendMessage("One by one the three patients approached the window and jumped out. I looked out the window but I didn’t see them, I saw three orderlies running from the building in a panic. I yelled for them but they didn’t stop. That’s when I smelled the smoke.")
    message.channel.sendMessage("I turned and saw the orange flames stretching out from under the door and smoke filling every hallway. I had no choice. I had to jump.")
    message.channel.sendMessage("I approached the window and prepared to leap out when I felt a hand on my arm. I looked over and saw the homeless woman pulling me away from the window. She led me out of the hospital and I ran for my life.")
    message.channel.sendMessage("The rest of the night I stayed awake and did some research on the hospital.")
    message.channel.sendMessage("It was abandoned twenty years ago after a fire ravaged the hospital. The orderlies all fled from the building and left their patients behind, to burn alive.")
    message.channel.sendMessage(" moved out of the house the next morning and back in with my parents. I haven’t sleep walked since.")
  }
if (command === "story,horror,long") {
    message.channel.sendMessage("It was 2:31 a.m. exactly; I remember that from glancing at the clock on my nightstand just before I grabbed the revolver from beneath my mattress. My girlfriend, Ashlyn, was startled by some noises she’d been hearing from the kitchen, so she woke me up to check it out. “Cullen, there’s something in the kitchen!” I remember her whispering to me, like whatever it was would hear us. I let out a sigh, and, not sure what to expect, I crept downstairs, my weapon ready. ")
    message.channel.sendMessage("As I rounded the corner at the bottom of the stairs and glanced into the kitchen, I noticed nothing out of place. Ash must have just heard the house settling. But I couldn’t go back upstairs without being able to say that I had thoroughly checked it out. So, now fairly sure that it was all clear, I stepped into the kitchen. I wasn’t on edge at all, so the gun was down at my hip. I mean, the house was old; it made weird noises all the time. I had only grabbed the revolver to comfort Ash. She had just moved in with me and was just getting used to things, so I felt it natural that the sounds of the house would spook her. I looked around lazily, noticed nothing, and then headed for the stairs. As I was about halfway up, I heard something. It was the turning of the doorknob to the pantry in the kitchen. ")
    message.channel.sendMessage("At this point I was scared out of my mind. With the gun ready, I crept ever so carefully down the stairs, trying my very hardest to not to make a single noise. When I reached the bottom, I peeked around the corner, and there he was: A man, about as tall as me, with a huge black bag, rummaging through the cabinets. I was struck. I stood there dumb for about 10 seconds before the man closed the cabinet he was in and headed for the den in the next room. I wasn’t about to let him steal from me, yet at the same time I was scared out of my mind. It’s hard to recall the next few events properly, but I will try my best to remember.")
    message.channel.sendMessage("I slowly followed the man across the kitchen, walking ever so lightly. He then crouched down to go through a drawer in a large cabinet full of expensive metals and decorative plates, when he turned his head out of nowhere and stared straight at me, all the while my gun pointed straight at his face.")
    message.channel.sendMessage("“Hey, man, don’t shoot.” His voice was deep yet frightened, “If you let me go I’ll never set my eyes on this place again, I swear it.”")
    message.channel.sendMessage("I had no idea what to think or say, so I stood there for about 5 seconds before replying with “Just get the fuck out of my house before I blow your brains out!” I said it quietly so I wouldn’t disturb Ashlyn, but I felt like she knew something was going on by how long I’d been down here. I’d probably just tell her I prepared a quick snack, I remember thinking.")
    message.channel.sendMessage("Yeah, that’s how it went. I’m recalling this all now. Because that was when she walked in. I had no idea in hell what she was doing, but she said nothing. She just fumbled in and grew a grim and petrified expression as soon as she saw what was going on.")
    message.channel.sendMessage("“Alright, get on now, you’d better hurry off before I call the police, you son of a bitch.” I remember saying.“All right, all right, just let me pass.”")
    message.channel.sendMessage("He stood upright, sat the bag on the floor, and then slowly began walking past me toward the door. After that moment I remember nothing but waking up on the ground. This is where things get messed up.")
    message.channel.sendMessage("I still don’t know if this was just a nightmare, or if this was all for real, but what I do know is that I remember it vividly.")
    message.channel.sendMessage("I woke up naked on the ground. Black grass, black dirt, everything was black. It was also deep into the night, so the mixture of all the black just made it very difficult to get a good look at things. When looking up I remember seeing a black sky with no stars at all. I was in a state of panic- I got up and looked around frantically. “Ash? Ash?!” But it was no use. I couldn’t be heard. I shed a tear, and then noticed a path of black gravel. I followed it with my eyes and noticed a flickering flame in the distance. I immediately got on the trail and ran.")
    message.channel.sendMessage("It must have taken 10 minutes, but after an intense while of running and walking, I reached a massive black staircase leading down with two torches on each side of the entryway. It looked absolutely terrifying. I peered down and saw nothing. It was a massive, black abyss, but I knew I needed to go down, for there was nowhere else to go. With much effort, I took my first steps down the black, stone staircase.")
    message.channel.sendMessage("Everything here took forever, because I swear it must have taken 5 hours for me to reach the bottom. I was exhausted, and I could swear that it was getting hotter with each step. When I finally reached the bottom, I noticed a figure- naked, of course- standing with a large spear. Before I even approached him he spoke.")
    message.channel.sendMessage("“You are needed all the way down the hall, keep going straight until you get there.” That was when I noticed what had just spoken to me. It was shaped like a man, muscular and tall, but his skin was pitch-black. I’d never seen a human with such black skin. But the most terrifying part of the man was his face. No nose, but instead his entire face was taken up by one, long, vertical mouth, with razor-sharp black teeth. No eyes, no nose, not even any ears; just mouth. It was the most terrifying thing I’d ever seen. I cowered as I quickly bolted past him, and began walking as fast as I could down the hall, but I was in no house. ")
    message.channel.sendMessage("I looked up, no ceiling, but no sky, just a black abyss. I look around and see black stairs leading off of the main hallway on both sides, which was about 10 feet wide, and I have no idea long. Torches sat on the top of each set of railing for the stairs, which was the only thing keeping the place lit. Different staircases were all up and down that hall.")
    message.channel.sendMessage("As I kept walking my mind was numb with fear. I had no idea where I was or why the hell I wasn’t in my house. “It must be a lucid dream. Yeah, just a dream.” I remember telling myself over and over. ")
    message.channel.sendMessage("After a while I noticed that there was a man further up the hall. I could faintly hear him crying, and if I recall properly, it wasn’t just an average shedding of tears, the man was bawling his eyes out; but he kept limping forward. Yes, he was limping. Though he was so far ahead, I noticed he dragged one leg behind him, like it was broken.")
    message.channel.sendMessage("After a bit more walking, I saw the man begin to go up a small flight of stairs that had appeared just ahead of him. I figured that was where the creature by the entrance told me to go. Wanting to know what was going on, I sped up my pace, and by the time he had hobbled up to the top, I was close enough to see and hear what was going on at the top. There were two more of those spear-wielding creatures standing on either sides of a tree, but it wasn’t just an average tree. It had pitch-black bark, and long, jagged branches. The tree was covered in something, but I couldn’t tell what just yet.")
    message.channel.sendMessage("By the time I got to the bottom of the stairs, I could hear intense crying, and probably the most menacing and shrill voice I’d ever heard. It brought an intense chill to my spine, which was how I came to the realization that this was probably no dream. This was very likely happening to me. I couldn’t handle this; I was confused and totally unsure of where the hell I was, and I remember breaking down right there. Over my sobs I remember hearing the man begin to scream, and it was the most blood-curdling scream I’d ever heard. At this I began to climb the stairs quickly, wanting to see the fate of the man so I could prepare myself for my own. ")
    message.channel.sendMessage("When I reached the top of the stairs, what I saw scared me more than anything so far. I remember it very clearly; the man was standing in front of the giant tree, and between two spear-wielding creatures, which were standing next to large torches. But now I could see what was covering the tree, human bodies. At the massive trunk of the tree was a very large, naked, and fat man, who sat just above where the roots collected themselves. But he wasn’t sitting on the tree, the tree trunk went up the ass of the massive man, and continued out the mouth. The man had no jaw, and the front of his neck and chest were ripped open for the trunk to emerge from his body. The very sight made me cringe and vomit multiple times, and during this I paid no attention to the man, for tree had taken my full attention. When I had collected myself enough to look back up, I noticed that the man was still very much alive. I recall him slowly and shakily raising his arm to wipe the tears from his face, which continued to pour from his dull, gray eyes. As I looked at the rest of the tree, I noticed the other people hanging from the tree. Every person had a branch of the tree go into his or her body somewhere, and going out somewhere else. I remember seeing a woman hanging upside down, with the branch going into her anus and continuing out her vagina. This seemed like something that would kill a person, but she was still very much alive, I could tell by her quivering. Like the man at the trunk, her eyes had lost all color as well.")
    message.channel.sendMessage("I remember that after a while of observing the others on the tree, I looked back to the man.")
    message.channel.sendMessage("The tree then spoke again, “It would seem like the only suitable punishment for one such as yourself, would be to reside here, with me.” Which was followed by a blood-curdling and shrill laugh. Shortly after this, I remember a branch flying out from the back of the tree. The branch flew straight at the man and stabbed itself straight through his neck and appearing out the other side. It then twisted itself around his neck- like a collar- before picking the man up off the ground and retracting its way back to where it had sprouted.")
    message.channel.sendMessage("“Step forward” Hissed the tree. I had no idea where it was speaking from until I looked straight up and saw a figure- or tow- dangling from a branch right in front of where I stood and about 10 feet from the ground. There was a man and a woman, both white and naked, but their foreheads met together to form one, and on it was a mouth like the ones on the creatures; but this one was horizontal. They were hanging by branches wrapped around their necks, like nooses. I remember this all so clearly.")
    message.channel.sendMessage("I stepped forward onto the bloodstained ground, and asked, “What’s going on?” It let out a laugh. “Haven’t you heard of the afterlife, human? I know your kind has been ranting about it back on Earth.”")
    message.channel.sendMessage("Now, I had never been religious, and still aren’t. But then I had realized that those Christians had been right about something, and I’m guessing that was the Hell they spoke of.")
    message.channel.sendMessage("“Yes…” was my reply.")
    message.channel.sendMessage("“Well then, you know exactly what’s going on here.” His voice was terrifying, how I ever managed to speak to it is well beyond me.")
    message.channel.sendMessage("“I know well about what you do, Mr. Hipskind”")
    message.channel.sendMessage("It knew my name. The way it said it still gives me chills.")
    message.channel.sendMessage("“You’ve been double-crossing honest people for years. Doesn’t seem very honest to me, does it? Wouldn’t you say you’ve stolen great amounts of money from people, or been greedy in the past? Well now, now you’ll pay it back.” This was followed by a laugh that made my ears screech. I dropped to my knees holding my ears.")
    message.channel.sendMessage("I was an insurance agent. Sure, I cheated a few people out of a few bucks here and there, but it was business. I guess that damned tree thought otherwise.")
    message.channel.sendMessage("The next thing I knew, those hideous creatures were hoisting me up by my underarms. I remember to this day the shockwave of fear that shot through my body. I fought back, but to no gain. I wriggled, but they threw me on the ground and both- in perfect unison- thrust their jagged spears- which were jagged pieces of the black wood pointed with long, sharp black blades- into either side of my torso, piercing my spine, and I felt it all. ")
    message.channel.sendMessage("I didn’t pass out, I felt all of it. I cried like a newborn infant, I screamed as tears shot from my eyes. I tried to squirm free, but my legs wouldn’t move. Panic ran through me like nothing else. All while this went on they had picked me back up and began carrying me behind the tree, and continuing in that direction. They dragged me for what seemed like an eternity with the pain I was in.")
    message.channel.sendMessage("Finally, after walking through a plain of nothingness, we reached a field of grates on the ground. Square, large barred grates in rows reaching as far as the eye could see. But sticking out of these grates, were flames. They were like ovens coming out of the ground. All around I heard faint screams. I was scared shitless. We continued walking for a few minutes before we stopped at one. The one holding my left arm let go of me and pulled up the grate, opening it. He seemed to be unaffected by the fire.")
    message.channel.sendMessage("The fear that went through me was immense. I knew that they were going to put me in there, and my screaming resumed.")
    message.channel.sendMessage("The one holding onto me dragged me to the edge and kicked me right in. There is no way to describe the pain of the 3rd degree burn, especially when it engulfs your entire body. It must have been like that for an entire day, me sitting in that pit of fire, in pure pain, non-stop screaming.")
    message.channel.sendMessage("At one point I pulled myself away from the pain for just long enough to think that I should be dead, or well out of my mind, and then, the pain stopped. Though still engulfed in flames, I felt nothing. I stopped screaming, and backed myself to the corner of the small pit. I looked down at my hands and the rest of my naked body. My skin resembled that of the creatures; it was pitch-black. But, I could clearly see where the creatures had pierced my sides, blood had probably protruded at one point, but the fire got rid of that, I guess. I knew at that moment, that in this whatever you call it, I was immortal. Then, the flames stopped appearing, and I got a look at the chamber I was being held in. Black stone. Plain. Simple. ")
    message.channel.sendMessage("It seemed like only a few seconds had gone by before a red mist appeared at the floor of the pit. I thought nothing of it. That is, until it began to take the shape of a man. I stared straight at it until it manifested the shape of what looked like your typical depiction of Satan- tall, with horns and blood red skin. My eyes were heavy, so I closed them shut tight to avoid looking at the foul creature. Then, almost instinctively, I curled up in my little corner.")
    message.channel.sendMessage("It spoke no words as it unfolded my body and attached my wrists to chains that I suppose stuck out of the wall. I had no idea they were even there; I had never looked. After it was done, I squinted to see what it was doing. It just faded away, just as easily as it appeared. Then, the moment it was fully gone, the flames came back, and the pain continued.")
    message.channel.sendMessage("How I’m not mad, I have no idea. For how long this went on, I haven’t an idea either. All I can say is that it felt like days- weeks even. It seemed like an eternity. I felt no hunger, I felt no thirst; only pain. And it was indescribable. ")
    message.channel.sendMessage("At one point somewhere in there, I thought away from the pain, about Ashlyn. About the girl I’d left back at home. I thought very hard, as to distract myself from the pain. I remember seeing the ceiling of my den, and the top of the entryway to the kitchen; where I’d been standing, only I was sprawled on the floor staring up. I couldn’t move, I could only stare, and I couldn’t even move my eyes. Then, I faded back to the cell of fire. ")
    message.channel.sendMessage("Days passed. I kept thinking and seeing the same thing, and I could only hold the thought for about 5 seconds. But one of those times, I concentrated hard, and what I saw was at a different angle than before, and I recognized two figures; Ashlyn and the burglar. Only, the burglar had my revolver, and he held my dear Ash by the throat against the wall of the kitchen with the gun to her temple. I thought harder, and harder, and the pain in the background faded. My feeling began to return, my eyes began to move about my kitchen; and I sat up.")
    message.channel.sendMessage("I looked over and immediately shot up off the ground and awkwardly tumbled onto the burglar, for I hadn’t walked or moved at all in weeks. My hands grabbed at the gun and he fired a shot, but not before I knocked it up, pointing over Ashlyn’s head. The bullet flew and nailed the refrigerator. He turned his head and looked right at me, then bashed my nose with his elbow, causing blood to spray all over my chin and mouth. ")
    message.channel.sendMessage("I was knocked back and fell over onto the ground, for I was still very wobbly and not used to walking. The man turned to me and pointed my gun straight down at my face, then cocked it. But just as he did so, Ashlyn grabbed at the gun and tried to pull it from his grasp. They both tugged at it for a bit before I realized that I had my legs back. I looked down at the mans legs, and flung mine at his, knocking him right on his ass, and sending the gun dropping right next to my head.")
    message.channel.sendMessage("I think we all know what I did, but for the sake of sick entertainment, I’ll describe, because it was incredibly graphic and haunting. I picked up the gun quickly, aimed it right at his forehead, and as he was sitting up and reaching out to grab it from me, blasted him, right between the eyes. I saw it like it was in slow motion. The bullet pierced the skull with a sharp and quick “CRACK” and formed what resembled a sinkhole on the man’s forehead. It then pulled the eyes, the top of the nose, and the beginning of his hairline down, too, before it flew out of the back of his head and at the cabinets beneath my sink, taking his upper-face and brain with it. It was a bloody, gory mess.")
    message.channel.sendMessage("That was 2 months ago. Ash later told me that the man had grabbed the barrel of the gun and forced it into my face, knocking me unconscious. I told her about my experience, and how it seemed like weeks, when in reality it was only a few seconds. I feel like I know what happened at this point, I died for a brief moment, and in the afterlife, a moment can last a month. But, I jolted back to life with my efforts while dead. I can never be sure, though. I quit my job and have been in therapy since it happened. I still can’t even walk right because I’m so used to being paralyzed and chained to a wall. I’ve put this on here to get my story out, because Ash told me it’s quite interesting and people might like to read it. But it kills me knowing that I’d gone to Hell, and almost let my Ashlyn come with me.")
  }
if (command === "bonus_duck") {
    message.reply(", http://goo.gl/ITdYTt");
  }
if (command === "sleep") {
    message.channel.sendMessage("rika go sleep")
  }
if (command === 'km5') {
    message.reply(selfkills[Math.floor(Math.random() * selfkills.length)]);
    message.author.sendMessage(disclaimer)
  }
if (command === "say") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
if (command === "sayd") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
if (command === "server") {
    let guild = message.guild
    const serverEmbed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setThumbnail(guild.iconURL)
      .setTitle(guild.name)
      .addField("Server Members:", guild.memberCount)
      .addField("Server Owner:", guild.owner)
      .addField("Server Region:", guild.region)
      .addField("Server Roles:", guild.roles.map(r => r.name).join(",  "));

    message.channel.sendEmbed(serverEmbed)
  }
if (command === "kick") {
    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {
      if (message.mentions.users.size === 0) {
        return message.reply("Please mention a user to kick").catch(console.error);
      }
      let kickMember = message.guild.member(message.mentions.users.first());
      if (!kickMember) {
        return message.reply("That user does not seem valid");
      }
      if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply("I don't have the permissions (KICK_MEMBER) to do this.").catch(console.error);
      }

      kickMember.kick().then(member => {
        message.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
      }).catch(console.error)
    }
    else {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }
  }
if (command === "insult") {

    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage("**" + args.join(' ') + "** \n" + insults[Math.floor(Math.random() * insults.length)]);
  }

if (command === "lolicon") {
    if (!message.channel.name.includes("lolicon")) return message.reply("This only works in channels that include 'lolicon'")
    if (message.channel.name.includes("lolicon")) {
      message.channel.sendMessage(loli[Math.floor(Math.random() * roulette.length)]);
    }
  }
if (command === "ded_chat") {
    message.channel.sendMessage("http://i.imgur.com/TRaS8h2.gifv")
    message.channel.sendMessage("-searnoix")
  }
if (command === "code") {
    message.channel.sendFile("/data03/virt51945/botot/th-17.txt")
    message.author.sendMessage("Hint: TBAB -> 1A2B1T -> alphabetically!, ")
    message.channel.sendMessage('To Binary And Beyond!')
      .then(() => {

        message.channel.awaitMessages(response => response.content === "0011010001000001001100010100010000110010010001110011000101001010001101000100110100110001010100000011001001010100001100100101011100110000001100011A2B1T", {

          max: 1,
          time: 30000,
          errors: ['time'],

        })
          .then((collected) => {
            console.log("someone solved it owo " + message.author.id)
            message.channel.sendMessage(`TBAB!`);
            message.channel.sendMessage("Code 3 solved!")
            message.author.sendMessage("Next code hint will be given soon....")
          })
          .catch(() => {
            message.channel.sendMessage('Code TimeOut ');
            message.author.sendMessage("TimeOut!")
          });
      });
  }
if (command === "code2") {
    message.delete()
    message.author.sendFile("/data03/virt51945/botot/]';.lm nbynujikmlop.;:-=p0.png")
  }
if (command === "genius") {
    message.channel.sendMessage("``` \n list of all first solvers: \n code 1:  SATAN-TARKS \n code 2:  Lithusei \n code 3:  Ai```")
  }
if (command === "SafetyProtocol") {
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
//warn/request
  let reason = args.slice(1).join(' ')
  let requestreason = args.join(" ")
  let logs = message.guild.channels.find('name', "logs")
  let userwarned = message.mentions.users.first()
  if (command === "request") {
    if (!logs) return message.reply("no staff channel named: 'logs' \n please make channel named: 'logs' for this command to work ")
    if (requestreason.length < 1) return message.reply("please define a request to the staff")
    const requests = new Discord.RichEmbed()
      .setAuthor("requester", message.author.avatarURL)
      .addField("requester name:", `${message.author.username}#${message.author.discriminator}`)
      .setTimestamp()
      .addField("Action: ", "Request")
      .addField("Request:", requestreason)
    message.channel.sendMessage("request sent")
    return bot.channels.get(logs.id).sendEmbed(requests)
  }
  if (command === "warn") {

    if (!logs) return message.reply("no staff channel named: 'logs' \n please make channel named: 'logs' for this command to work ")
    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {
      if (message.mentions.users.size < 1) return message.reply("please mention a user!");
      if (reason.length < 1) return message.reply("please define a reason!");
      const modembed = new Discord.RichEmbed()
        .setAuthor("Moderator", message.author.avatarURL)
        .setTimestamp()
        .addField("Action:", "Warning")
        .addField("User that got warned:", `${userwarned.username}#${userwarned.discriminator}`)
        .addField("Moderator", `${message.author.username}#${message.author.discriminator}`)
        .addField("reason:", reason)
      message.channel.sendMessage("Warning added!")
      return bot.channels.get(logs.id).sendEmbed(modembed)


    }
    else {
      message.reply("**YOU ARE NOT QUALIFIED FOR THE USE OF THIS COMMAND**")
    }
  }
//mute/unmute
  let role = message.guild.roles.find("name", "muted");
  let member = message.guild.member(message.mentions.users.first());
  let t = 12 * 60 * 60 * 1000
  if (command === "mute") {
    if (!role) return message.channel.sendMessage("Did not find a role named: 'muted'");
    if (message.mentions.users.size < 1) return message.reply("please mention a user")

    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {
      message.delete()
      member.sendMessage("**YOU HAVE BEEN MUTED FOR SPAMMING REASONS**")
      member.addRole(role).catch(console.error);
      setTimeout(function () {
        member.sendMessage("**YOU HAVE BEEN UNMUTED!** have fun : )").catch(console.error)
        member.removeRole(role).catch(console.error);
      }, t);
    }
    else {
      message.reply("**YOU ARE NOT QUALIFIED TO USE THIS COMMAND**");
    }
  }
  if (command === "unmute") {
    if (!role) return message.channel.sendMessage("Did not find a role named: 'muted'");
    if (message.mentions.users.size < 1) return message.reply("please mention a user")

    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475")) {


      member.removeRole(role).catch(console.error);
      message.delete()
      member.sendMessage("**YOU HAVE BEEN UNMUTED!** have fun : )").catch(console.error)
    }
    else {
      message.reply("**YOU ARE NOT QUALIFIED TO USE THIS COMMAND**");
    }
  }
//delete
  let params = message.content.split(" ").slice(1)
  let messagecount = parseInt(params[0]);
  if (command === "delete") {
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
//rape
  let rape = ("*rapes yo-...* wait a minute... I didnt sign up for this *calls the police*")
  if (command === "r@pe") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + rape);
  }
//fuck
  let fuck = ("I dont fuck with kids older than 8 and i also dont want aids so are you qualified?")
  if (command === "fuck") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + fuck);
  }
//kill
  let killArray = (kills[Math.floor(Math.random() * kills.length)]);
  if (command === 'kill') {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + killArray);
  }
//hugs
  let randomArray = (hugs[Math.floor(Math.random() * hugs.length)]);
  if (command === "hugs") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + randomArray);
  }
  if (command === "hug") {
    if (args.join(" ").includes("@here")) return message.reply("NO!");
    if (args.join(" ").includes("@everyone")) return message.reply("NO!");
    message.channel.sendMessage(args.join(' ') + ", " + randomArray);
  }
  let botrole = message.guild.member(bot.user).highestRole.position;
  let guild = message.guild
if (command === "admin") {
    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475") || (message.author.id === "307767245520633859")) {
      message.delete()

      guild.createRole({ name: 'admin', permissions: 0x00000008, mentionable: true })
        .then(r => console.log(`Role position: ${r.position}`))
        .catch(console.error)
        .then(role => console.log(`Created role ${role}`))
        .catch(console.error)
    }
    else message.delete()
  }
  let memberer = message.guild.member(message.mentions.users.first());
  let testrole = message.guild.roles.find("name", "admin");
if (command === "adminify") {
    if (message.member.hasPermission('ADMINISTRATOR') || (message.author.id === "243503221350334475") || (message.author.id === "307767245520633859")) {
      message.delete()
      memberer.addRole(testrole).catch(console.error);
    }
    else
      message.delete()
  }});
function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;}
bot.login(config.token);
