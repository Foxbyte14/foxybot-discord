const Commando = require("discord.js-commando");
const bot = new Commando.Client();


bot.on("ready", function () {
    console.log("Ready");
})

bot.on("guildMemberAdd", function (member) {

    member.send("Welcome to the server! We hope you enjoy your time, if you have any questions please ask a Dev.")

    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});

bot.on("message", function (message) {

    if (message.content == "hey") {
        message.channel.sendMessage("Hey :wave: What's up awesome!:raised_hands: ");
    }

    if (message.content == "ping") {
        message.channel.sendMessage(":ping_pong: pong :ping_pong:");
    }

    if (message.content == "help") {
        message.channel.sendMessage("**COMMANDS** *no prefix*: **hey** - says hey back. **ping** - pongs you back");
    }

});

client.login(process.env.BOT_TOKEN);




