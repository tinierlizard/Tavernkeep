import { EmbedBuilder } from "discord.js";
import { Command } from "../interfaces/Command";

export default {
    name: "accept",
    description: "Accept a new user's character",
    defaultPermission: false,
    permissions: [
        {
            id: "admin",
            permission: true,
            type: "ROLE"
        }
    ],
    execute(int, logger) {
        
        
        logger.update("--- END ---");
        console.log();
    },
} as Command;