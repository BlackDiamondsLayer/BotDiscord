exports.run = (client, message) => {
  var debut = new Date();
  var getvalueof = message.author;
  request('http://www.google.com', function (error, response, body) {
      var fin = new Date();
      var tempsMs = fin.getTime() - debut.getTime();
      message.channel.sendMessage({
          embed: {
              type: 'rich',
              description: '',
              fields: [{
                  name: 'Temps de Réponse',
                  value: tempsMs / (5 * 2) + ' ms',
                  inline: true
              }],
              color: 3447003,
              footer: {
                  text: 'by ~N_atha_n Le Geek~ & Message by Jack\'Ob.',
                  proxy_icon_url: ' '
              },
              author: {
                  name: getvalueof.username,
                  icon_url: getvalueof.avatarURL,
                  proxy_icon_url: ' '
              }
          }
      })
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Permet de voir son ping',
  usage: 'ping'
};
