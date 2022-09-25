import { Command } from "../interfaces/Command";

export default {
    name: "test",
    description: "A testing command to test if the bot's replying to commands",
    defaultPermission: false,
    permissions: [
        {
            id: "e",
            permission: true,
            type: "ROLE"
        }
    ],
    execute(int, logger) {
        logger.update("Test command ran")
    
        int.reply({
            content: "Hello! I'm alive!",
            ephemeral: true
        })
        

        logger.update("--- END ---")
        console.log();
    },
} as Command;