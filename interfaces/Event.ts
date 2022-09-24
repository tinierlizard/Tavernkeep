import { BaseInteraction, Events } from "discord.js";
import { Bot } from "../structs/Bot";

export interface Event {
    name: string,
    type: Events;
    execute(): any;
}