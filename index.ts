import { GatewayIntentBits as Intents } from "discord.js";
import { Bot } from "./structs/Bot";

export const bot = new Bot({
        intents: [
            Intents.GuildMessages,
            Intents.GuildMembers,
            Intents.GuildMessages,
            Intents.MessageContent,
            Intents.GuildMessages
        ]
    }
)