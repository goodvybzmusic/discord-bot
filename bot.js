const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setPresence({
		game: {
			name: `Good Vybz`, // Change what the bot is watching or playing.
			type: 3 // 0 for playing, 1 for streaming, 2 for listening and 3 for watching.
		}
	});
	console.log('I am ready!');
});

client.on('message', message => {
    if(message.author.bot) return;
    else if (message.member.hasPermission("MANAGE_MESSAGES")) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&  =]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&  =]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Sorry, you cannot include links in your messages - You should advertise only in #showcase');
        });
    }
});


client.on('message', msg => {
  if (msg.content === '!clear') {
  const embed = new Discord.RichEmbed()
  .setTitle("GOOD VYBZ CLEAR")
  .setAuthor("Created by Panayiotis", "https://cdn.discordapp.com/avatars/405783458619850782/d0d496048d2718a939e8bb82f4a8618c.png?size=128")
  .addField("!clear 10", "Clears 10 Messages")
  .addField("!clear 20", "Clears 20 Messages")
  .addField("!clear 50", "Clears 50 Messages")
  .addField("!clear 100", "Clears 100 Messages")
  .setColor(0xb30000)
  .setThumbnail("http://i.imgur.com/rtCnCW3.png")
    msg.channel.send({embed})
  }
    
});

client.on('message', function(message) {
    if (message.content == "!clear 10") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(10);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 10 Messages!")
                    .setColor(0xb30000)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', function(message) {
    if (message.content == "!clear 20") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(20);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 20 Messages!")
                    .setColor(0xb30000)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', function(message) {
    if (message.content == "!clear 50") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(50);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 50 Messages!")
                    .setColor(0xb30000)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', function(message) {
    if (message.content == "!clear 100") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(100);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 100 Messages!")
                    .setColor(0xb30000)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

 client.on("message", (message) => {
      if (message.content.startsWith("!kick")) {
          if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Access denied!")
          var member= message.mentions.members.first();
          member.kick().then((member) => {
              message.channel.send(":ok_hand:  " + member.displayName + " has been successfully kicked");
          }).catch(() => {
              message.channel.send("Sorry I can't kick this person!");
          });
          
      }
      
  });

 client.on("message", (message) => {
      if (message.content.startsWith("!ban")) {
          if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Access denied!")
          var member= message.mentions.members.first();
          member.ban().then((member) => {
              message.channel.send(":ok_hand:  " + member.displayName + " has been successfully banned");
          }).catch(() => {
              message.channel.send("Sorry I can't ban this person!");
          });
          
      }
      
  }); 


client.on('message', function(message) {
    if (message.content == "!clear ultra") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});
   
client.login('NDI5NzA1ODE5MjE1NDk1MTkw.DaFi5w.Yi31T_9GseVkXqUqZhSAjw9UoZw');
