import "dotenv/config";
import { Config } from "../interfaces/Config";

let config : Config;

let serversMap = new Map();
serversMap.set("DEV", "1023104156023656469")
serversMap.set("PROD", "728426687712460830")

config = {
    TOKEN: process.env.TOKEN || "",
    STORE_FILE: "../store.json",
    DEV_MODE: true,
    SERVERS: serversMap
}

export { config };