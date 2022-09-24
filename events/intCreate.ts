import { BaseInteraction, Events } from "discord.js";
import { Event } from "../interfaces/Event";
import { bot } from "../index";

let event: Event = {
    name: "",
    type: Events.InteractionCreate,
    execute: function() {
        let client = bot.client;

        client.on(Events.InteractionCreate, (int: BaseInteraction) => {
            if (int.isCommand()) {
                let cmds = bot.commands;

                if (cmds.has(int.commandName)){
                    cmds.get(int.commandName)?.execute(int);
                }
            }
        })
    }
}

export default event;