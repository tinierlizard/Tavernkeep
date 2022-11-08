import { ApplicationCommandOptionType, Collection, EmbedBuilder, Message, TextChannel } from "discord.js";
import { Command } from "../interfaces/Command";

export default {
    name: "mostrecent",
    description: "find most recent",
    defaultPermission: true,
    options: [
        {
            name: "user",
            description: "The user to find the most recent msg of",
            type: ApplicationCommandOptionType.User,
            required: true,
        }
    ],
    async execute(int, logger) {
        int.reply({ content: "e", ephemeral: true })
        let channel = await int.guild!.channels.fetch(int.channelId) as TextChannel;
        let filtered: Collection<string, Message<true>>;

        await channel!.messages.fetch({limit: 100})
        .then(messages => {
            filtered = messages.filter(msg => msg.author == int.user);
        })
        .catch(e => {
            console.log(e);
        })

        // someone save me
        var mostRecent: Message | undefined = filtered!.first();

        console.log(mostRecent);

        logger.update("--- END ---");
        console.log();
    },
} as Command;