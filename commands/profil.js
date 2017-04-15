exports.run = (client, message) => {
  var memberavatar = message.author.avatarURL
        var membername = message.author.username
        var mentionned = message.mentions.users.first();
        if (mentionned) {
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }

        if (getvalueof.bot == true) {
            var checkbot = "L'utilisateur est un bot";
        } else {
            var checkbot = "N'est pas un bot";
        }
        if (getvalueof.presence.status == 'online') {
            var status = "En ligne";
        } else {
            var status = "Hors ligne";
        }

        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: ' Pseudo',
                    value: getvalueof.nickname,
                    inline: true
                }, {
                    name: ' User id',
                    value: getvalueof.id,
                    inline: true
                }, {
                    name: 'Discriminateur',
                    value: getvalueof.discriminator,
                    inline: true
                }, {
                    name: 'Status',
                    value: status,
                    inline: true
                }, {
                    name: 'Bot',
                    value: checkbot,
                    inline: true
                }],
                image: {
                    url: getvalueof.avatarURL
                },
                color: 0xE46525,
                footer: {
                    text: '<@' + message.author.id + '>',
                    text: 'Jack\'Ob',
                    proxy_icon_url: ' '
                },

                author: {
                    name: membername,
                    icon_url: memberavatar,
                    proxy_icon_url: ' '
                }
            }
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profile',
  description: 'Obtient des Informations sur son profil',
  usage: 'profile'
};
