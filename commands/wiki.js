exports.run = (client, message) => {
const Wiki = require('wikijs')
message.delete(message.author)
          if (!message.content.substr(5)) {
              console.log(Date.now(), "DANGER", "Vous devez fournir un terme de recherche.");
              message.reply("Vous devez fournir un terme de recherche.");
              return;
          }
          var wiki = new Wiki.default();
          wiki.search(message.content.substr(5)).then(function (data) {
              if (data.results.length == 0) {
                  console.log(Date.now(), "DANGER", "Wikipedia ne trouve pas ce que vous avez demandée : " + message.content.substr(5));
                  message.reply("Je ne peut trouvé ce que vous voulez dans Wikipedia :(");
                  return;
              }
              wiki.page(data.results[0]).then(function (page) {
                  page.summary().then(function (summary) {
                      if (summary.indexOf(" may refer to:") > -1 || summary.indexOf(" may stand for:") > -1) {
                          var options = summary.split("\n").slice(1);
                          var info = "Selectioné une options parmis celle-ci :";
                          for (var i = 0; i < options.length; i++) {
                              info += "\n\t" + i + ") " + options[i];
                          }
                          message.reply(info);
                          selectMenu(message.channel, message.author.id, function (i) {
                              commands.wiki.process(Client, message, options[i].substring(0, options[i].indexOf(",")));
                          }, options.length - 1);
                      } else {
                          var sumText = summary.split("\n");
                          var count = 0;
                          var continuation = function () {
                              var paragraph = sumText.shift();
                              if (paragraph && count < 3) {
                                  count++;
                                  message.reply(message.channel, paragraph, continuation);
                              }
                          };
                          message.reply("**Trouvé " + page.raw.fullurl + "**", continuation);
                      }
                  });
              });
          }, function (err) {
              console.log(Date.now(), "ERREUR", "Impossible de se connecté a Wikipédia");
              message.reply("Uhhh...Something went wrong :(");
          });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'wiki',
  description: 'Permet de faire une recherche sur Wikipedia',
  usage: 'wiki [recherche]'
};
