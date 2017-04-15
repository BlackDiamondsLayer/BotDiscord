exports.run = (client, message) => {
message.delete(message.author)
  var roll = Math.floor(Math.random() * 50) + 1;
  message.channel.sendMessage(":game_die: " + roll)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Te permet de jouer au dès',
  usage: 'roll'
};
