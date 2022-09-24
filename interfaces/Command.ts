import { CommandInteraction } from "discord.js";

export interface Command {
    name: string,
    description: string,
    aliases?: string[],
    permissions?: string[],
    execute(int: CommandInteraction): any;
}