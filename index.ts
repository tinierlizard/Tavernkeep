import { GatewayIntentBits  } from "discord.js";
import { Bot } from "./structs/Bot";

export const bot = new Bot({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ]
    }
)