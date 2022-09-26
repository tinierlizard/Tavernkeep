import { Embed, EmbedBuilder, Events, Message } from "discord.js";
import { Event } from "../interfaces/Event";
import { bot } from "../index";

let event: Event = {
    name: "test",
    type: Events.MessageCreate,
    execute() {
        let client = bot.client;

        client.on(Events.MessageCreate, async msg => {
            if (!(msg.content == "WELCOME-TEST")) return;

            let embed = new EmbedBuilder()
                .setTitle("Welcome!")
                .setDescription(`Welcome to our humble Guild Hawk Tavern, <@${msg.author.id}>.
                My name's the Tavernkeep, and I help keep things clean around here.
                If you'd like to join a campaign and join in on the fun, use the command /charhelp.`)
                .setColor([167,17,15])
                .setThumbnail("https://cdn.discordapp.com/icons/728426687712460830/d81f3dde6ff0502f6c42841ddec4a081.webp?size=96")
                .setTimestamp();
            
            await msg.channel.send({
                embeds: [embed]
            });

            await msg.channel.send({content: `<@${msg.author.id}>`})
                .then(x => {
                    x.delete()
                });
        })
    },
}

export default event;