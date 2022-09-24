import "dotenv/config";
import { Config } from "../interfaces/Config";

let config : Config;

config = {
    TOKEN: process.env.TOKEN || "",
    STORE_FILE: "../store.json"
}

export { config };