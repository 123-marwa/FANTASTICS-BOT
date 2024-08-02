const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255686561714";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255686561714";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_01_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTHBTcERTVzcvRk5EWDVZc3JnNURlc1BIS3U1aDdQbzlQUVBpRjVrWEc2cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2NTk0ODkyMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg3MkQ3RTgwODMyMzFDMjEwMkZCNDkwM0E0MEI0NDUxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU4MjA4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY1OTQ4OTIwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEZDNzcwM0NCNTRCMzlBMTI4RTExNEY2NDE2QzFDMzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTgyMDg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVIdmhiWThFVGpLb21BeVhHOUlVMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYThkNTJkN2ItZTU1MS00MDgwLWJiMzItNDg3ZmQ0YzMzNThkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE0MixcbiAgICAgIDI3LFxuICAgICAgMTU5LFxuICAgICAgNjcsXG4gICAgICAyMjEsXG4gICAgICAyMjIsXG4gICAgICAxODYsXG4gICAgICAxMTIsXG4gICAgICAyNDEsXG4gICAgICAxMjcsXG4gICAgICAxNCxcbiAgICAgIDE0MixcbiAgICAgIDE2MCxcbiAgICAgIDE2NCxcbiAgICAgIDE5LFxuICAgICAgMTk1LFxuICAgICAgMTA3LFxuICAgICAgMjIsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMjIzLFxuICAgICAgMTcwLFxuICAgICAgMTI2LFxuICAgICAgNjUsXG4gICAgICA0NixcbiAgICAgIDcyLFxuICAgICAgNzQsXG4gICAgICAxOTYsXG4gICAgICA2MixcbiAgICAgIDg2LFxuICAgICAgMTg2LFxuICAgICAgMTEyLFxuICAgICAgMjEyLFxuICAgICAgMjM0LFxuICAgICAgNTYsXG4gICAgICAyLFxuICAgICAgNjgsXG4gICAgICAyNDUsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2V1I1VFRaVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjU5NDg5MjAwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk0OTc5NDYwNDY0NjQwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBpNkp3QkVMNklzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwYzVNampQK2QvVjdESzlYK3JHMHlINklMSGdrbVZ3WXFwdlZoL2hIVUFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNOYVU3OVRwVFhhcFNPVXpXbm1qWHZKWlhFYThHYlROY3hzRE5GNGNxc3lKQStnWGhMUVEwcGw0TTBjMVh3b0V1VkNmUDVxZVhqQlZheEluUm11ckJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFSQ0NWbXRzUENPL0M1YkxWZExNVFE0V0NMTk9FUkpSRU9xZEREUEp5QWh5TkZ1QU5oaW8wT1lSdGNuK0Yzd3l0ak9BN1lwaDM3eDdlYWdWbUEvM2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY1OTQ4OTIwMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTgyMDgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXkvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJeS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
