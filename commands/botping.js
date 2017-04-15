exports.run = (client, message) => {
var now = require('performance-now');
      var startTime = now();
      message.channel.sendMessage("**Pong = wait..**")
          .then(message => {
              var endTime = now();
              return message.edit("_**Mon ping est de =**_ "+(endTime - startTime).toFixed(3)+" _ms._");
          }).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Permet de voir mon ping',
  usage: 'ping'
};
