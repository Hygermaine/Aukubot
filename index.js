// constants
const Discord = require('discord.js');
const { prefix, token } = require ('./config.json');
const nsapi = require ('nsapi');
var api = new nsapi.NsApi("Your nation's name");
const client = new Discord.Client();
const prefix2 = "Maggot, where is your power armor?";
const prefix3 = "coup time";
const moment = require('moment')


//-------------------------------------------------------------------

// import

client.on('ready', () => {
console.log('Logged in!');
client.user.setActivity('//visitor [name], //citizen [name], //diplomat [name], and //immigrate.');
client.user.setStatus("online");
});

worker: node index.js

//-------------------------------------------------------------------

// ready

client.on('message', message => {

    if(message.content.startsWith(`${prefix}coinflip`)) { 
            var coin = ["Heads!", "Tails!"];
            const randomNumber = Math.floor(Math.random() * coin.length);
            message.channel.send(coin[randomNumber]);
         }
    }
)

//-------------------------------------------------------------------

// cyanide

client.on('message', message => {

    if(message.content.startsWith(`${prefix}cyanide`)) { 
        const max = 4500;
        message.channel.send('http://explosm.net/comics/' + (Math.floor(Math.random()* max) + 500));
    }
})

//-------------------------------------------------------------------

//capitalization
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

//-------------------------------------------------------------------

//fix underscore
function decompute(str) {
    return str.toString().replace(/_/g, ' ')
}

function EST(str) {
    return str.toString().replace('GMT', 'EST')
}

//-------------------------------------------------------------------

// welcome message
client.on('guildMemberAdd', member => {
    if(member.guild.id = "581122908093677578") { 
   client.guilds.get('581122908093677578').channels.get('581130713806536724').send("**Welcome to Aukumnia " + "<@" + member.id + ">" + "!** The <@&581130222963916820> will get you set up ASAP!");
}})

//-------------------------------------------------------------------

// rant

client.on('message', message => {

    if(message.content.startsWith(`${prefix2}`)) {
     
        message.channel.send("*You are out of uniform, " + message.author + "! Where is your power armor? Don't have any? You expect me to believe that, maggot? The truth is you lost an expensive piece of army-issue equipment. That suit is going to come out of your pay, and you will remain in this mans army until you are five hundred and ten years old, which is the number of years it will take for you to pay for a Mark II Powered Combat Armor you have lost! Report to the armory and have a new suit issued to you, then report back to me, private! Dismissed!*");
       
        }
    
    }

)

//-------------------------------------------------------------------

//coup time

client.on('message', message => {

    if(message.content.startsWith(`${prefix3}`)) {
     
        message.channel.send("https://tenor.com/view/done-school-revolution-schools-over-yes-gif-5185597");
               
        }
    
    }

)

//-------------------------------------------------------------------

// burnout

client.on('message', message => { 
   
    if(message.content.startsWith(`${prefix}burnout`)) {
        let member = message.mentions.members.first();               
         message.channel.send(member.displayName + "** can't burn out!");}
                
    }

)

//-------------------------------------------------------------------

//NS

client.on('message', message => { 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "nat") {
        let natname = args[0];
        let fragment = args[1];
        api.nationRequest(natname, [fragment])
        .then(function(data) {
            console.log(data,[fragment]);
        }
    )}   

    if (command === "nation") {
        let fullname = args[0]; // Remember arrays are 0-based!.
             
        api.nationRequest(fullname, ["fullname", "motto", "region", "influence", "dispatches", "lastactivity", "flag", "founded", "category", "factbooks"])
            .then(function(data) {
                const name = data["fullname"];
                const region = data["region"];
                const motto = data["motto"];
                const influence = data["influence"];
                const dispatches = data["dispatches"];
                const factbooks = data["factbooks"];
                const flag = data["flag"];
                const founded = data["founded"];
                const activity = data["lastactivity"];
                const category = data["category"];
                message.channel.send({embed: {
                    title: `${name}`,
                    color: 4412026,
                    description: `${category}`,
                    "author": {
                        "name": "Aukubot",
                        "icon_url": "https://imgur.com/GREkrSG.png",
                    },
                    "thumbnail": {
                        "url": `${flag}`
                    },
                    fields: [{                                        
                        name: "Current Region",
                        value: `${region}`,
                        "inline": true
                    },
                                        {
                        name: "Influence Level",
                        value: `${influence}`,
                        "inline": true
                    },{
                        name: "Dispatches",
                        value: `${dispatches}`,
                        "inline": true
                    },{
                        name: "Factbooks",
                        value: `${factbooks}`,
                        "inline": true
                    },
                    {
                        name: "Founded",
                        value: `${founded}`,
                        "inline": true
                    },
                    {
                        name: "Last Activity",
                        value: `${activity}`,
                        "inline": true
                    },
                    {
                        name: "Motto",
                        value: `${motto}`,
                        
                    },
                ]}
            })
        }
    )
}



    if (command === "region") {
        let fullname = args[0]; // Remember arrays are 0-based!.
        
        
        api.regionRequest(fullname, ["name", "numnations", "founder", "delegate", "flag", "lastupdate", "founded", "power"])
            .then(function(data) {
                const name = data["name"];
                const nations = data["numnations"];                            
                var lastupdate = moment((data["lastupdate"] * 1000)).format("DD-MM-YYYY h:mm:ss") + " EST";
                const flag = data["flag"];
                const b = data["delegate"];
                const delegate = decompute(b);
                const g = titleCase(delegate);
                const a = data["founder"];
                const founder = decompute(a);
                const d = titleCase(founder);
                const founded = data["founded"];
                const regionalpower = (data["power"]);
                message.channel.send({embed: {
                    title: `${name}`,
                    color: 4412026,
                    "author": {
                        "name": "Aukubot",
                        "icon_url": "https://imgur.com/GREkrSG.png",
                    },
                    "thumbnail": {
                        "url": `${flag}`
                    },
                    fields: [{
                        
                        name: "Last Update",
                        value: `${lastupdate}`,
                        "inline": true
                    },
                    {
                        name: "Founded",
                        value: `${founded}`,
                        "inline": true
                    },
                    {                                        
                        name: "Founder",
                        value: `${d}`,
                        "inline": true
                    },
                    {
                        name: "Delegate",
                        value: `${g}`,
                        "inline": true
                    },
                    {
                        name: "Regional Power",
                        value: `${regionalpower}`,
                        "inline": true
                    },
                    {
                        name: "Nations",
                        value: `${nations}`,
                        "inline": true
                    },
                    
                                
                ]}
            })
 
        })
}})

//-------------------------------------------------------------------

// administrative punitive functions

client.on('message', message => { 
    if(message.member.hasPermission(['KICK_MEMBERS'])) { 

        if (message.member) 
        //console.log(message.content);

        if(message.content.startsWith(`${prefix}kick`)) {
        //message.channel.send("Kick")
                
            let member = message.mentions.members.first();
            message.channel.send(":RIP: **" + member.displayName + " has been kicked!**");
            member.kick();
        }

        if(message.content.startsWith(`${prefix}ban`)) {
            //message.channel.send("Kick")
                    
            let member = message.mentions.members.first();
            message.channel.send(":RIP: **" + member.displayName + " has been banned!**");
            member.ban();
        }
         
         
    }}

    

)

//-------------------------------------------------------------------

// role management & citizenship

client.on('message', message => { 

    if(message.guild.id = "581122908093677578") { 
        if(message.member.hasPermission(['MANAGE_ROLES'])) { 

            if (message.member) 
            //console.log(message.content);

            if(message.content.startsWith(`${prefix}citizen`)) {
                //message.channel.send("Kick")

                let L1 = message.guild.roles.find(r => r.name === "Citizen")  
                let member = message.mentions.members.first();
               
                member.addRole(L1).catch(console.error);
            }
            
            if(message.content.startsWith(`${prefix}visitor`)) {
                //message.channel.send("Kick")
        
                let L1 = message.guild.roles.find(r => r.name === "Visitor")  
                let member = message.mentions.members.first();
                
                member.addRole(L1).catch(console.error);  
            }

            if(message.content.startsWith(`${prefix}diplomat`)) {
                //message.channel.send("Kick")
        
                let L1 = message.guild.roles.find(r => r.name === "Diplomat")  
                let member = message.mentions.members.first();
                member.addRole(L1).catch(console.error);  
            }

            if(message.content.startsWith(`${prefix}immigrate`)) {
                //message.channel.send("Kick")
                api.regionRequest("aukumnian_imperium", ["delegate"])
                .then(function(data) {
                    let delegate = data["delegate"]
                    message.channel.send({embed: {
                        title: `How to become a citizen of the Imperium!`,
                        color: 4412026,
                        description: `Follow these steps to get roled as a citizen here!`,
                        "author": {
                            "name": "Aukubot",
                            "icon_url": "https://imgur.com/GREkrSG.png",
                        },
                        "thumbnail": {
                            "url": `https://imgur.com/n8wBuTT.png`
                        },
                        fields: [{                                        
                            name: "Step One",
                            value: `[Create a nation](https://www.nationstates.net/page=create_nation).`,
                            
                        },
                        {
                            name: "Step Two",
                            value: `[Add your email address to your nation](https://www.nationstates.net/page=settings).`,
                            
                        },
                        {
                            name: "Step Three",
                            value: `Move your nation to [our region](https://www.nationstates.net/region=aukumnian_imperium).`,
                            
                        },
                        {
                            name: "Step Four",
                            value: `Apply to join the World Assembly by clicking on join in the [World Assembly](https://www.nationstates.net/page=un) page. `,
                            
                        },
                        {
                            name: "Step Five",
                            value: `Check your email for a mail from NationStates, and confirm your participation in the WA (It could also be in your spam folder). `,
                            
                        },
                        {
                            name: "Step Six",
                            value: `Endorse our WA Delegate by scrolling to the bottom of [his page here](https://www.nationstates.net/nation=${delegate}) and clicking on "endorse".`,
                            
                        },
                        {
                            name: "Step Seven",
                            value: `Notify us once you've completed all the steps and you'll be masked as a citizen.`,
                            
                        },
                    ]}})
            })
            
        }}
    }
         
})

//-------------------------------------------------------------------


//FALLOUT: DEAD MAN WALKING


client.on('message', message => { 
    if(message.content.startsWith(`${prefix}runfallout`)) { 
        message.channel.send({embed: {
            title: "**FALLOUT: DEAD MAN WALKING**",
            description: "*A POST-NUCLEAR ROLEPLAYING GAME*",
            timestamp: new Date(),
            image:{
                url: "https://cdn.discordapp.com/attachments/598956242764955668/599001428559659022/game_image.png",
            },
            footer: {
                icon_url: "https://i.pinimg.com/originals/29/40/42/294042cde65b12a57d1edaa2e3fa783b.png",
                text: "Written By Algerburg",
            },
            fields: [
                {
                    name: "**Welcome to FALLOUT: DEAD MAN WALKING!**",
                    value: "Howdy, Wanderer! Welcome to the latest version of the new Automated RP Game **FALLOUT: DEAD MAN WALKING!** It's an in-depth, and comprehensive roleplaying video-game that you can play *in* the server!"
                },

                {
                    name: "**How to play!**",
                    value: "You are probably wondering how to play now; it's easy, just type **//falloutplay**!"
                },
            ]
        
        }}
    )}

    if(message.content.startsWith(`${prefix}falloutplay`)) {   
            message.channel.send({embed: {
                title: "**FALLOUT: DEAD MAN WALKING**",            
                timestamp: new Date(),
                image:{
                    url: "https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/6/65/SecondBattleOfHooverDam.png/290px-SecondBattleOfHooverDam.png?version=08a740bd1fced209e341a16aed6c6461",
                },
                footer: {
                    icon_url: "https://i.pinimg.com/originals/29/40/42/294042cde65b12a57d1edaa2e3fa783b.png",
                    text: "Written By Algerburg",
                },
                fields: [
                    {
                        name: "**War. War Never Changes.**",
                        value: "*The Western United States, once one of the most bustling areas in the whole country built on entertainment, reduced to rubble within mere hours following the detonation of several nuclear warheads over major industrial hubs. However, your family survived by sheltering inside of your town's Vault-Tec Facility! Lucky you! However, less fortunately, you were born towards the end of your Vault's lifespan. A coolant-failure forces you to venture out into the Wasteland, return with a coolant module, and save the people of Vault 138. However, many trials and tests await you in the Mojave Wastes, and unbeknownst to you, you leave the Vault in the middle of a war between the nations still fighting for America, because war;* ***war never changes.***",
                    },
                    {
                        name: "**Type //ftcont to Continue!**",
                        value: "**Adventure Awaits!**",
                    },
                ]
            
            }})
            
    }}

)




































//-------------------------------------------------------------------

// login
client.login(token);
