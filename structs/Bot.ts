import { Client, Collection, ActivityType, ClientOptions, ApplicationCommandDataResolvable, ApplicationCommandType } from "discord.js";
import { Command } from "../interfaces/Command";
import { config } from "../utils/config";
import { Config } from "../interfaces/Config";
import chalk from "chalk";
import { readdirSync } from "fs";
import { join } from "path";
import figlet from "figlet";

export class Bot {
    public commands = new Collection<string, Command>();
    public client: Client;
    public config: Config;
    public guildId: string;

    public constructor(public options: ClientOptions) {
        this.client = new Client(options);
        this.client.login(config.TOKEN);

        this.client.on("warn", inf => console.log(inf));
        this.client.on("error", console.error);
        this.config = config;
        this.guildId = (this.config.DEV_MODE ? this.config.SERVERS.get("DEV") : this.config.SERVERS.get("PROD"))!;

        this.importCommands();
        this.hookListeners();
    }

    private async importCommands() {
        const cmdFiles = readdirSync(join(__dirname, "..", "commands"));

        for (let file of cmdFiles) {
            let cmd = await import(join(__dirname, "..", "commands", `${file}`));
            this.commands.set(cmd.default.name, cmd.default);
        }

        // TODO: actually publish commands to discord because we must :(
        // also make permission system again :cry:

        this.regCommands();
    }

    private async hookListeners() {
        const listFiles = readdirSync(join(__dirname, "..", "events"));

        for (let file of listFiles) {
            let cmd = await import(join(__dirname, "..", "events", `${file}`));

            cmd.default.execute();
        }
    }

    private async regCommands() {
        console.log(chalk.greenBright("[COMMANDLOADER] Registering commands into discord..."));
        
        this.client.on("ready", async ()=>{
            console.log(chalk.greenBright("[COMMANDLOADER] Uploading command data..."));
            
            await this.client.application!.commands.set(this.turnCmdsIntoAppCmdDataResolvable(), this.guildId);
            console.log(chalk.greenBright("[COMMANDLOADER] Registered commands."));
            this.message();
        })
    }

    private message() {
        figlet("Tavernkeep", function(e, d){
            if (e) console.log(e);
            console.log(chalk.greenBright(d));
        });

        this.client.user!.setActivity("the new D&D campaign", {
            type: ActivityType.Watching
        })
    }

    public turnCmdsIntoAppCmdDataResolvable(){
        console.log(chalk.greenBright("[COMMANDLOADER] Turning commands into resolvable types..."));
        
        let cmds = this.commands;
        let AppCmdData: ApplicationCommandDataResolvable[] = [];

        cmds.forEach(command => {
            if (command.type == undefined || command.type == ApplicationCommandType.ChatInput){
                AppCmdData.push({
                    name: command.name,
                    description: command.description,
                    options: command.options || []
                })
            } else {
                AppCmdData.push({
                    description: command.description,
                    name: command.name,
                    type: ApplicationCommandType.Message
                })
            }
        });

        return AppCmdData;
    }
}