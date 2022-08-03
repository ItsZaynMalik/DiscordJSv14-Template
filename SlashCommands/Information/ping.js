const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'API Ping of the Bot',
    cooldown: 3,
    type: ApplicationCommandType.ChatInput,
    async execute(client, interaction, args){
        let embed = new EmbedBuilder()
        .setDescription(`-> API Ping of the Bot is ${client.ws.ping} ms`)
        
        interaction.followUp({ embeds: [embed] })
    }
}
