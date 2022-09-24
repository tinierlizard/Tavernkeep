import { Client, Collection, ActivityType, ClientOptions } from "discord.js";
import { Command } from "../interfaces/Command";
import { config } from "../utils/config";
import chalk from "chalk";
import { readdirSync } from "fs";
import { join } from "path";
import figlet from "figlet";

export class Bot {
    public commands = new Collection<string, Command>();
    public client: Client;

    public constructor(public options: ClientOptions) {
        this.client = new Client(options);

        this.client.login(config.TOKEN);

        this.client.on("ready", () => {
            
            figlet("Tavernkeep", function(e, d){
                if (e) console.log(e);
                console.log(chalk.greenBright(d));
            });

            this.client.user!.setActivity("the new D&D campaign", {
                type: ActivityType.Watching
            })
        })

        this.client.on("warn", inf => console.log(inf));
        this.client.on("error", console.error);

        this.importCommands();
        this.hookListeners();
    }

    private async importCommands() {
        const cmdFiles = readdirSync(join(__dirname, "..", "commands"));

        for (let file of cmdFiles) {
            let cmd = await import(join(__dirname, "..", "commands", `${file}`));
            this.commands.set(cmd.default.name, cmd.default);
        }
    }

    private async hookListeners() {
        const listFiles = readdirSync(join(__dirname, "..", "events"));

        for (let file of listFiles) {
            let cmd = await import(join(__dirname, "..", "events", `${file}`));

            cmd.default.execute();
        }
    }
}