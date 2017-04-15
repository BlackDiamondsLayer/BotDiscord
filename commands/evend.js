exports.run = (client, message) => {
  message.delete(message.author)
            message.channel.sendMessage("", {
                    embed: {
                        color: 0x06DF00,
                        title: "**Un event vien de se close !**",
                        fields: [
                          {

                          name: `**${message.author.username}** a close sont event !`,
                          value: `**Fin de l'event**`,
                          inline: true
                      },
                      {
                          name: `Rôle(s)`,
                          value: `N'est pas ecore disponible ... **${message.author.guildRoles}**`,
                          inline: true
                      },

                  ],
                  timestamp: new Date(),
                  thumbnail: {
                      url: message.author.avatarURL
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
  name: 'evend',
  description: 'Permet de mettre fin a son event',
  usage: 'evend'
};
