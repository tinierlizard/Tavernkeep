import { Embed, EmbedBuilder, Events, Message } from "discord.js";
import { Event } from "../interfaces/Event";
import { bot } from "../index";

let event: Event = {
    name: "test",
    type: Events.MessageCreate,
    execute() {
        let client = bot.client;

        client.on(Events.MessageCreate, async msg => {
            if (!(msg.content == "WELCOME-TEST")) return;

            let embed = new EmbedBuilder()
                .setTitle("Welcome!")
                .setDescription(`Welcome to our humble Guild Hawk Tavern, <@${msg.author.id}>.\nMy name's the Tavernkeep, and I help keep things clean around here. I'll DM you with some extra information, please check it out!`)
                .setColor([167,17,15])
                .setThumbnail("https://cdn.discordapp.com/icons/728426687712460830/d81f3dde6ff0502f6c42841ddec4a081.webp?size=96")
                .setTimestamp();
            
            await msg.channel.send({
                embeds: [embed]
            });

            await msg.channel.send({content: `<@${msg.author.id}>`})
                .then(x => {
                    x.delete()
                });
                
            let dmChannel = await msg.author.createDM();
            
            // Init Welcome
            embed = new EmbedBuilder()
                .setTitle("Welcome!")
                .setDescription(
                    `I've already introduced myself, so I'll skip that part.
                    Welcome to Guild Hawk! We're a group of nerdy folks who love a good game of D&D, and participate as much as we can.
                    (If you need help at any step, or if you're new to D&D, feel free to disregard these messages and ask for help in the server!)
                    (PS: If you already have a character, skim through this anyways and make sure it has the right options that we require!)`
                )
                .setColor([167,17,15]);
            await dmChannel.send({embeds: [embed]});

            // Campaign
            embed = new EmbedBuilder()
                .setTitle("1. The Campaign")
                .setDescription(
                    `First things first, please [join our campaign](https://ddb.ac/campaigns/join/18558213764404014) using D&D Beyond and create a character.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023431368174206986/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("2. Name & Misc. Options")
                .setDescription(
                    `Please give your character a name, then make sure to check all the boxes shown at label 2.
                    Afterwards, make sure to set the Advancement Type set to XP and Hit Point Type to Manual (label 3).`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023448586899439616/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("3. Race")
                .setDescription(
                    `Go to the next tab (1. RACE) and pick a race for your character.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023434068521652326/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("4. Class")
                .setDescription(
                    `Go to the next tab (2. CLASS) and pick a class for your character.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023434273539244062/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("4.1 Class: Proficiences")
                .setDescription(
                    `Click the drop-down titled Proficiencies, and select however many possible for your class.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023434404581871646/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("4.2 Class: Spells")
                .setDescription(
                    `Next, click "spells" near the top of the screen (label 1), note how many cantrips and spells you're able to select (2), then select any you'd like below (3).`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023437944872247346/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("5. Abilities")
                .setDescription(
                    `Before doing anything on D&D Beyond, go back to the Discord server and go to the channel <#1023435312229265470> and use the command !randchar.
                    The bot will reply with six rolls, each resulting in a total. Run this command a second time, and pick whichever of the two you'd prefer.
                    Next, go back to D&D Beyond and go to the next tab. Change the dropdown under Ability Scores to Manual/Rolled (label 1).
                    Lastly, pick one of your six number to go into each ability underneath (label 2).`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023435279564025928/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("6. Description")
                .setDescription(
                    `Go to the next tab, Description.
                    First, select some background for your character (label 1).
                    Depending on your background selected, you'll be given some more options. In this example, it was two languages (label 2). Fill out these options however you'd like.
                    Lastly, click the dropdown labeled "Suggested Characteristics".
                    You'll a set of different tables, each labeled something else.
                    For the table listed Personality Traits, select two traits. Other than that, only pick one trait per table.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023436094869614692/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("6.1 Description: Character Details")
                .setDescription(
                    `Scroll down to the bottom of the page and expand the drop-down titled "Character Details".
                    Select an Alignment, a Faith (if applicable, this can be left empty).
                    Finally, pick a Lifestyle.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023437412115951636/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("6.2 Description: Physical Characteristics")
                .setDescription(
                    `Next, scroll farther down to "Physical Characteristics".
                    Here, make sure your weight, height, and age are all realistic and within limits.
                    (If you don't know these limits, find your race [here](https://5e.tools/races.html) and look for the respective limits).`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023437412115951636/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("7. Starting Equipment")
                .setDescription(
                    `First, change the tab to the "5. Equipment" tab.
                    Click the dropdown labeled starting equipment (1), click equipment (2), then select your preferred starting equipment from the selections below (3).`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023436437376467004/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("7.1 Starting Equipment: Adding")
                .setDescription(
                    `Make sure to hit "ADD STARTING EQUIPMENT" at the bottom of the screen.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023436618356490250/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("7.2 Starting Equipment: Equipping")
                .setDescription(
                    `Afterwards, you'll be presented a list of your starting inventory.
                    Make sure to select wield/use/etc to the right of any item that has the option.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023436813580378122/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("8. Portrait")
                .setDescription(
                    `First, find/create an image representing the physical appearance of your character.
                    The images below outline the steps required for this.`
                )
                .setColor([167,17,15]);
            await dmChannel.send({embeds: [embed]});

            await dmChannel.send({content: "https://cdn.discordapp.com/attachments/1023429667367170108/1023438931229941820/unknown.png"})
            await dmChannel.send({content: "https://cdn.discordapp.com/attachments/1023429667367170108/1023439047269564487/unknown.png"})
            await dmChannel.send({content: "https://cdn.discordapp.com/attachments/1023429667367170108/1023439129666650133/unknown.png"})
            await dmChannel.send({content: "https://cdn.discordapp.com/attachments/1023429667367170108/1023439320356507710/unknown.png"})

            embed = new EmbedBuilder()
                .setTitle("9. Sharing")
                .setDescription(
                    `Once you're done setting your protrait, click on "WHAT'S NEXT" in the list of tabs near the top.
                    Afterwards, hit "VIEW CHARACTER SHEET".`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023438233398427758/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("9.1 Sharing: Copying the link")
                .setDescription(
                    `First, select "SHARE" near the top of the screen.
                    Afterwards, hit copy link near label 2 and make sure it's saved to your clipboard.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023439581368041606/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("9.2 Sharing: Showcase")
                .setDescription(
                    `Next, go to the <#959896640196595812> channel and paste your link and then ping <@783622598775799808>.
                    And... that's it! Now you just have to wait for your character to get accepted.`
                )
                .setColor([167,17,15])
                .setImage("https://cdn.discordapp.com/attachments/1023429667367170108/1023440013695909888/unknown.png");
            await dmChannel.send({embeds: [embed]});

            embed = new EmbedBuilder()
                .setTitle("10. You're done!")
                .setDescription(
                    `Thank you again for joining us here at Guild Hawk, we hope you enjoy your stay.
                    Here's to endless adventures!`
                )
                .setColor([167,17,15]);
            await dmChannel.send({embeds: [embed]});
        })
    },
}

export default event;