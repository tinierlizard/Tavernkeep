import { ApplicationCommandOptionData, ApplicationCommandType, CommandInteraction } from "discord.js";
import { CommandLogger } from "../structs/CommandLogger";
import { Permission } from "./Permission";

export interface Command {
    name: string,
    description: string,
    defaultPermission: boolean,
    execute(int: CommandInteraction, logger: CommandLogger): any;
    type?: ApplicationCommandType,
    aliases?: string[],
    permissions?: Array<Permission>,
    options?: ApplicationCommandOptionData[],
}