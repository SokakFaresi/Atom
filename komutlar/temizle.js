exports.run = function(client, message) {
  message.channel.bulkDelete(20);
  message.channel.send("mesaj sildim").then(msg => {
    msg.delete(5000)
  })
  
  };
  
  exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [],
    permLevel: 3 
  };
  
  exports.help = {
    name: 'sil', 
    description: 'Belirtilen miktarda mesaj siler',
    usage: 'sil <miktar>'
  };
  