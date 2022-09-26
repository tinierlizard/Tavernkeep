import { EmbedBuilder } from "discord.js";
import { Command } from "../interfaces/Command";

export default {
    name: "credits",
    description: "See who made me possible!",
    defaultPermission: true,
    async execute(int, logger) {
        await int.deferReply({ephemeral: true})
        logger.update("Making update message")

        let creditsMessage = new EmbedBuilder()
            .setTitle("Credits")
            .setDescription("Here's who and what made me possible - thanks for being interested!")
            .addFields([
                {
                    name: "Developer",
                    value: "<@271714172201467905>",
                    inline: true
                },
                {
                    name: "Suggestions",
                    value: `<@783622598775799808>`,
                    inline: true
                },
                {
                    name: "Community",
                    value: "<@358808318795317269> for making this community!"
                },
                {
                    name: "Tech",
                    value: `📃| Made with [Discord.js v14](https://discord.js.org/#/)
                    ⚙️| Made using [TypeScript](https://www.typescriptlang.org/), [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/)`,
                    inline: true
                },
                {
                    name: "Want to see the code?",
                    value: "[Here's](https://github.com/tinierlizard/Tavernkeep) what my brain looks like"
                }
            ])
            .setColor([167,17,15])
            .setThumbnail("https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png");
        
        await int.editReply({
            embeds: [creditsMessage]
        });

        logger.update("Sent credits message")

        logger.update("-- END --")
        console.log();
    },
} as Command;