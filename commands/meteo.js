exports.run = (client, message) => {
const weather = require('weather-js')
message.delete(message.author)
          var location = message.content.substr(6);
          var unit = "C";
          try {
              weather.find({search: location, degreeType: unit}, function (err, data) {
                  if (err) {
                      console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                      message.author("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);
                  } else {
                      data = data[0];
                      let embed = new Discord.RichEmbed()
                      embed.setTitle(`**Méteo pour ${data.location.name}**`)
                      embed.setColor(`#1ABC9C`)
                      embed.setThumbnail(data.current.imageUrl)
                      embed.addField(`\n\n__**Prevision D'aujourd'hui**__`, `\u200B`)
                      embed.addField(`\nTemp:`, data.current.temperature + "°" + unit, true)
                      embed.addField(`Vent:`, data.current.winddisplay, true)
                      embed.addField(`Ciel`, data.current.skytext)
                      embed.addField(`__**Prevision pour Demain :**__`, `\u200B`)
                      embed.addField(`\nTemp:`, `${data.forecast[1].low} - ${data.forecast[1].high} °${unit}`, true)
                      embed.addField(`Précipitation`, data.forecast[1].precip + "%", true)
                      embed.addField(`Ciel`, data.forecast[1].skytextday)
                      message.author.sendEmbed(embed).catch(console.error);
                      message.delete(message.author);
                  }
              });
          } catch (err) {
              console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
              message.reply("Idk pourquoi c'est cassé tbh :(");
          }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meteo',
  description: 'Permet de voir la météo',
  usage: 'meteo [ville] [pays]'
};
