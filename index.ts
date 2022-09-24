import { Client, GatewayIntentBits as intents } from "discord.js";
import { Bot } from "./structs/Bot";

export const bot = new Bot({
        intents: []
    }
)