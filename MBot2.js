 const Discord = require("discord.js");
 const bot = new Discord.Client();
 const Client = require('discord.js').Client;
 const config = require("/data03/virt51945/botot/config.json");
 const client = new Client();
 const fs = require("fs");
 const sql = require('sqlite');

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
 let weather = ["but a bit colder", "but a bit warmer", "nothing more, nothing less", "like hell", "i guess? never been there", "error 404,", "but the loli's escaped...again..damnit", "LOLILAND!", "but derp is a cuck", "and loli's are amazing", "but it's not", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "never gonna give you up", "is this the real life?", "but still not portugal", "but more \n more! \n MORE! \n **MORE!**", "but fist me harder grandma", "and it's all good in the loli's hood"]
 let disclaimer = ["**NOTE:** \n ``` \n when feeling down or depressed, killing yourself is not the answer. Things that help: \n - Chat with trained HopeCoaches on 'https://www.thehopeline.com/gethelp' page.  You can also download TheHopeLine app to reach out for help in an instant. \n - Call or chat with the Suicide Prevention LifeLine at 1-800-273-8255 or www.suicidepreventionlifeline.org. \n Don't do it!```"]
 let dice = ["1", "2", "3", "4", "5", "6"]
 let random = ["http://i.memeful.com/media/post/PM02BEd_700wa_0.gif", "http://i.memeful.com/media/post/1RXY1bd_700wa_0.gif", "http://i.memeful.com/media/post/kRp6z2w_700wa_0.gif", "", "http://i.memeful.com/media/post/BRkjB6M_700wa_0.gif", "http://i.memeful.com/media/post/ER5rbyd_700wa_0.gif", "http://i.memeful.com/media/post/1RXbZwp_700wa_0.gif", "http://i.memeful.com/media/post/oMJ28xM_700wa_0.gif", "http://i.memeful.com/media/post/1RXGWZM_700wa_0.gif", "http://i.memeful.com/media/post/WwlrNpR_700wa_0.gif", "http://i.memeful.com/media/post/kRQBx2d_700wa_0.gif", "http://i.memeful.com/media/post/Xw7pxGM_700wa_0.gif", "http://i.memeful.com/media/post/9d6Nqdp_700wa_0.gif", "http://i.memeful.com/media/post/kRp69bw_700wa_0.gif", "http://i.memeful.com/media/post/3dBOAEw_700wa_0.gif", "http://i.memeful.com/media/post/NwrLG6R_700wa_0.gif", "http://i.memeful.com/media/post/oMJNPM9_700wa_0.gif", "http://i.memeful.com/media/post/GwDA4qM_700wa_2.gif", "http://i.memeful.com/media/post/4wbkVXM_700wa_0.gif", "http://i.memeful.com/media/post/KWwlNRE_700wa_0.gif", "http://i.memeful.com/media/post/mRPm10d_700wa_0.gif", "http://i.memeful.com/media/post/BdqbnWw_700wa_0.gif", "http://i.memeful.com/media/post/BdqpZRW_700wa_0.gif", "http://i.memeful.com/media/post/YMKg8rM_700wa_0.gif", "http://i.memeful.com/media/post/kRpL6bR_700w_0.jpg"]
 let snekfetch = require('snekfetch');
 let url = "https://discordbots.org/api/bots/256885622944432129/stats"
 let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MzUwMzIyMTM1MDMzNDQ3NSIsImlhdCI6MTQ5MzMyNDcyOX0.P3MFPihdfoOCMP3yjYNO5vlsXdBzCyqmLrg5sVkxw9gs"

bot.login(config.token);

bot.on('error', (e) => console.error(e));
bot.on('warn', (e) => console.warn(e));
bot.on('debug', (e) => console.info(e));

fs.readdir('/Users/joonastamm/Desktop/candybot/events', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`/Users/joonastamm/Desktop/candybot/events/${file}`);
    let eventName = file.split('.')[0];
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  
let command = message.content.split(' ')[0];
command = command.slice(config.prefix.length);

let args = message.content.split(' ').slice(1);

try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
      return;
  }
});