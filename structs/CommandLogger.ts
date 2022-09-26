import chalk from "chalk";
import { Command } from "../interfaces/Command";

export class CommandLogger {
    private command: Command;

    constructor(command: Command){
        this.command = command;
    }

    public error(message: string){
        console.log(chalk.redBright(`[${this.command.name.toUpperCase()}] ERR: ${message}`));
    }

    public update(message: string, color?: Array<number>) {
        if (color) {
            console.log(chalk.rgb(color[0], color[1], color[2])(`[${this.command.name.toUpperCase()}] ${message}`));
        } else {
            console.log(chalk.greenBright(`[${this.command.name.toUpperCase()}] ${message}`));
        }
    }
}