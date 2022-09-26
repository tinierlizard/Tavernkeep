import { BaseInteraction, EmbedBuilder, Events } from "discord.js";
import { Event } from "../interfaces/Event";
import { bot } from "../index";
import { checkPermissions } from "../utils/checkPermissions";
import { CommandLogger } from "../structs/CommandLogger";

export default {
    name: "IntCreate",
    type: Events.InteractionCreate,
    execute: function() {
        let client = bot.client;

        client.on(Events.InteractionCreate, async (int: BaseInteraction) => {
            if (int.isCommand() || int.isContextMenuCommand()) {
                let cmds = bot.commands;

                if (cmds.has(int.commandName)){
                    let command = cmds.get(int.commandName);
                    if (await checkPermissions(command!.permissions || [], int, command!.defaultPermission)) {
                        
                        let logger = new CommandLogger(command!);
                        logger.update("--- BEGIN ---")
                        command!.execute(int, logger);
                    } else {
                        let embed = new EmbedBuilder()
                            .setTitle("Invalid Permissions")
                            .setDescription("You don't have permission to run this command.")
                            .setColor([255,0,0]);

                        int.reply({
                            embeds: [embed],
                            ephemeral: true
                        })
                    }
                }
            }
        })
    }
} as Event;