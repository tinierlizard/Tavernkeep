import chalk from "chalk";
import { APIGuildMember, CommandInteraction, GuildMember, GuildMemberRoleManager } from "discord.js";
import { Permission } from "../interfaces/Permission";

export async function checkPermissions(permData: Array<Permission>, int: CommandInteraction, defaultPermission: boolean): Promise<boolean> {
    return new Promise((res) => {
        permData.forEach(perm => {
            if (perm.type == "USER") {
                if (perm.id == int.user.id) res(perm.permission);
            }
        })

        let member: GuildMember | APIGuildMember | null = int.member;
        var roles = member!.roles;

        if (roles instanceof GuildMemberRoleManager) {
            let userRoles = roles.cache;
            userRoles.forEach(role => {
                permData.forEach(perm => {
                    if (perm.type == "ROLE") {
                        if ((perm.id == role.id || perm.id == role.name)) res(perm.permission);
                    }
                })
            })
        } else {
            console.log(chalk.redBright("[PERMCHECK] Something's gone seriously wrong."));
            res(false);
        }

        res(defaultPermission)
    });
}