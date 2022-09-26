import { EmbedBuilder, Events, GuildTextBasedChannel } from "discord.js";
import { Event } from "../interfaces/Event"
import { bot } from "../index"

let event: Event = {
    name: "MemberJoin",
    type: Events.GuildMemberAdd,
    execute() {
        let client = bot.client;

        client.on("guildMemberAdd", async mem => {
            let guild = mem.guild;
            let genChan: GuildTextBasedChannel = await guild.channels.fetch(
                bot.config.DEV_MODE ? "1023104156858335265" : "766823163920384011"
            ) as any;
            
            let embed = new EmbedBuilder()
                .setTitle("Welcome!")
                .setDescription(`Welcome to our humble Guild Hawk Tavern, <@${mem.id}>.
                My name's the Tavernkeep, and I help keep things clean around here.
                If you'd like to join a campaign and join in on the fun, use the command /charhelp.`)
                .setColor([167,17,15])
                .setThumbnail("https://cdn.discordapp.com/icons/728426687712460830/d81f3dde6ff0502f6c42841ddec4a081.webp?size=192")
                .setTimestamp();
            
            await genChan.send({
                embeds: [embed]
            });

            await genChan.send({content: `<@${mem.id}>`})
                .then(x => {
                    x.delete()
                });
        })
    },
}

export default event;