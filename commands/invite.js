exports.run = (client, message) => {
  message.author.sendMessage("```Ce lien te permetera d\'inviter le bot sur ton server Discord :```**https://discordapp.com/oauth2/authorize?client_id=285326901331886101&scope=bot&permissions=-1**'");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: "Permet d'obtenir le lien d'invitation",
  usage: 'invite'
};
