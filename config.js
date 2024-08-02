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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU0LFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJabUJwYlcxcVN2WmFKZ25OSHpBcjY4MGx6b2NxWStXQ1dXandLQ1I0ZkN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY4NjU2MTcxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjY3MzI5Q0I2MEQ4NjQ2MzhGMTdGNEZCMDkyMUU5ODVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjI5NjgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllzdFA1cVdpVGhLV245QlpNZHlXTFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDEyMzIxZGItY2U0Ni00MjQ0LTlhMTgtZjExNTVlYTRhN2I0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDE2MSxcbiAgICAgIDEsXG4gICAgICAxODEsXG4gICAgICA5MCxcbiAgICAgIDIxMixcbiAgICAgIDU1LFxuICAgICAgMjExLFxuICAgICAgMjI0LFxuICAgICAgNTUsXG4gICAgICAxNjIsXG4gICAgICAzNixcbiAgICAgIDE4OSxcbiAgICAgIDE2OSxcbiAgICAgIDI0MixcbiAgICAgIDgxLFxuICAgICAgODAsXG4gICAgICAxMTIsXG4gICAgICAyMjMsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxNzUsXG4gICAgICAyMTgsXG4gICAgICA5OSxcbiAgICAgIDIzNSxcbiAgICAgIDIsXG4gICAgICAyMTMsXG4gICAgICAxNTksXG4gICAgICAxODYsXG4gICAgICAzLFxuICAgICAgMzcsXG4gICAgICA2NSxcbiAgICAgIDg4LFxuICAgICAgMjIsXG4gICAgICAyMDksXG4gICAgICA2NyxcbiAgICAgIDIzNixcbiAgICAgIDE3LFxuICAgICAgMjEyLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUU0WjRMSFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY4NjU2MTcxNDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hcndhX1lcIixcbiAgICBcImxpZFwiOiBcIjIyMzQyODk0NjcyNzE2NjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMnA1Z3NRcWZ5MHRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF2enJwRXNGQTkrWHNzdlBQRGxQbm10MWNGMGcrTmQxd0lpOThyRGxqU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieXBycXRua2NMNlhmaFpmMVRlTDZJa1pLQVkzTUZqSGltSHZYbWNoUS9GWmY3Z011K09Kd0g3OGZCampFVnBJcldGdFRtVTd2YmpsU0dwMFZ2d0Z3RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3hYSHhSUWx5TGFqcE5RWFhhLzRqRkdCZkt0Q2NROEk2Q0MvMmVmb3ZjcnEyY2FUeSsxYklaWTBKU3NabHN3QjVKeE1ZS0JOdnRaaEZyODJaRnpJQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njg2NTYxNzE0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjI5Njc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREMvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID  

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
