import chalk from "chalk";
import { APIGuildMember, CommandInteraction, Guild, GuildMember, GuildMemberRoleManager } from "discord.js";
import { Permission } from "../interfaces/Permission";

export async function checkPermissions(permData: Array<Permission>, int: CommandInteraction, defaultPermission: boolean): Promise<boolean> {
    return new Promise(async (res) => {
        permData.forEach(perm => {
            if (perm.type == "USER") {
                if (perm.id == int.user.id) res(perm.permission);
            }
        })

        let member: GuildMember | APIGuildMember | null = int.member;
        var roles = member!.roles;

        if (roles instanceof GuildMemberRoleManager) {

            await (member as GuildMember).guild.roles.fetch(); // guarantees that @everyone will be in a cache used on 18, fixes error on 18
            let userRoles = roles.cache;

            userRoles.forEach(role => {
                permData.forEach(perm => {
                    if (perm.type == "ROLE") {
                        if ((perm.id == role.id || perm.id.toUpperCase() == role.name.toUpperCase())) res(perm.permission);
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