import { ApplicationCommandOptionType, EmbedBuilder, Message } from "discord.js";
import { Command } from "../interfaces/Command";

export default {
    name: "mostrecent",
    description: "find most recent",
    defaultPermission: true,
    // options: [
    //     {
    //         name: "user",
    //         description: "The user to find the most recent msg of",
    //         type: ApplicationCommandOptionType.User,
    //         required: true,
    //     }
    // ],
    async execute(int, logger) {
        int.reply({ content: "e", ephemeral: true })
        let channel = int.channel;
        let filtered: Array<Message> = [];

        // why is fetch not returning anything???
        await channel?.messages.fetch({limit: 5})
            .then(messages => {
                console.log('after then');
                console.log(messages);
            })
            .catch(e => {
                console.log(e);
            })

        logger.update("--- END ---");
        console.log();
    },
} as Command;