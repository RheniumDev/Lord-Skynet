const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')


client.on('message' , message => {
    let myRole = message.guild.roles.cache.find(role => role.name === ":beginner: MOD")|| (role => role.name === ":trident: ADMIN")
    let guild = client.guilds.cache.get('682197495056433190')
    if(message.content === "!live"){
                guild.setIcon("LIVE.png")
                .then(updated => console.log('Yes'))
                .catch(console.error)
            }
            if(message.content === "!regular"){
                guild.setIcon("Regular.png")
                .then(console.log('Yes'))
                .catch(console.error)
            }
if(message.content === "!lmao"){
    message.reply("Very Funny")
}
        })
  
console.log("Yes")

    

client.login(config.token);