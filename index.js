const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'shit') {
   // message.reply('pong');
    message.channel.sendMessage('ah yh');
  }
});



bot.on('message', message => {
  if (message.content === 'shawty') {
   // message.reply('pong');
    message.channel.sendMessage('Shawty Shawty Shawty Shawty nuni busyeo busyeo busyeo sunmi makheyo makheyo makheyo naega michyeo michyeo baby!');
  }
});

bot.on('message', message => {
  if (message.content === 'damn') {
   // message.reply('pong');
    message.channel.sendMessage('ddanddan ddanddada dda ddaranddan ddanddan ddanddada dda!');
  }
});

bot.on('message', message => {
  if (message.content === 'sorry') {
   // message.reply('pong');
    message.channel.sendMessage('Sorry Sorry Sorry Sorry Sorry Sorry naega naega naega meonjeo nege nege nege bbajyeo bbajyeo bbajyeo beoryeo baby!');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"PLAYING BLACK SUIT"}})
  console.log('I have jackoo: {SERVERNAME}')
})




bot.on('message', message => {
  if (message.content === 'All day, in my head, round and round it goes question mark, everyday') {
   // message.reply('pong');
    message.channel.sendMessage('I know');
  }
});

bot.on('message', message => {
  if (message.content === 'niga nal manjimyeon onmomi baneunghae') {
   // message.reply('pong');
    message.channel.sendMessage('niga isseoya sal su isseo every day, every night I can feel you');
  }
});

bot.on('message', message => {
  if (message.content === 'neon neomu areumdawo nuneul ttel suga eopseo oh no') {
   // message.reply('pong');
    message.channel.sendMessage('oh no');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});


bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'LEETEUK');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('');
