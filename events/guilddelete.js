exports.run = (bot) => {

bot.on("guildDelete", guild => {
  snekfetch.post("https://discordbots.org/api/bots/256885622944432129/stats")
  .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MzUwMzIyMTM1MDMzNDQ3NSIsImlhdCI6MTQ5MzMyNTA0Mn0.tx-MN-S7ojiflFUcn7hyLRFAj_oEdAyKYpvFm_gucgA")
  .send({ server_count: bot.guilds.size })
  .then(console.log('Updated dbots.org status.'))})

}
