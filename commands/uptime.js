exports.run = (client, message) => {
  message.channel.sendMessage('\u200B', {
              embed: {
                  color: 1881571,
                  title: `**Information sur le bot discord ${client.user.username}**`,
                  fields: [
                      {
                          name: `__Utilisation mémoire__`,
                          value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB (MegaBites)`,
                          inline: true
                      },
                      {
                          name: `:clock12: __Uptime__`,
                          value: `${moment.duration(client.uptime).format(" D [Jours], H [Heures], m [Minutes], s [Secondes]")}`,
                          inline: true
                      },
                      {
                          name: `\u200B`,
                          value: `\u200B`,
                          inline: true
                      },
                      {
                          name: `__Serveurs with me__`,
                          value: `${client.guilds.size.toLocaleString()}`,
                          inline: true
                      },
                      {
                          name: `__Total Players__`,
                          value: `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                          inline: true
                      },
                      {
                          name: `__Total Channels__`,
                          value: `${client.channels.size.toLocaleString()}`,
                          inline: true
                      },
                      {
                          name: `__Version Of Discord.js__`,
                          value: `v${Discord.version}`,
                          inline: true
                      }
                  ],
                  timestamp: new Date(),
                  thumbnail: {
                      url: client.user.avatarURL
                  }
              }
          })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'Obtient toute les Information possible sur le bot et le serveur',
  usage: 'uptime'
};
