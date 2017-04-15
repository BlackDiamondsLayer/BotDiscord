exports.run = (client, message) => {
  message.delete(message.author)
          message.channel.sendMessage("", {
            embed: {
                color: 0x06DF00,
                title: `**Un Event a étais lancée !**`,
                fields: [
                    {
                        name: `**${message.author.username}** _vous invite a rejoindre l'event !_`,
                        value: `**Autorisation reçu des Fondateurs**`,
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
  name: 'event',
  description: 'Permet de lancer un event',
  usage: 'event'
};
