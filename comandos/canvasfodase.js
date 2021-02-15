const Canvas = require('canvas');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
pessoa = message.author
}
    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/788826421265956904/810509263184724008/Z.png?width=500&height=510');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);
    ctx.drawImage(avatar, 25, 5, 150, 150);
    const marretada = new Discord.MessageAttachment(canva.toBuffer(), 'fds.png');


let marret = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription(`Fodase?`)
    .setFooter(`Comando executado por ${message.author.tag}`)
  .attachFiles([marretada])
  .setImage('attachment://fds.png')

    message.quote(marret);

    
}