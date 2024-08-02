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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_48_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICA5OCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFVmRHh1NUlsRzg1dkx3WXZiTmNMWFpWcWRaMUhjSWxaVy9mV2JodlI3RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclB3QzJKLWtTeG03ZzdmNlRxTXdvQVwiLFxuICBcInBob25lSWRcIjogXCIxZjRjZjcyMi1lYzEzLTRmODMtOTI3NS00ZmM1NDQyMDI2YWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjEsXG4gICAgICA0OSxcbiAgICAgIDQzLFxuICAgICAgOTIsXG4gICAgICAxMDMsXG4gICAgICAxOTMsXG4gICAgICAxNCxcbiAgICAgIDE2NyxcbiAgICAgIDE4MyxcbiAgICAgIDkwLFxuICAgICAgMjgsXG4gICAgICA4NyxcbiAgICAgIDExMSxcbiAgICAgIDE3NixcbiAgICAgIDg1LFxuICAgICAgMTUxLFxuICAgICAgMTI1LFxuICAgICAgNjUsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTMzLFxuICAgICAgMTE3LFxuICAgICAgMjMsXG4gICAgICAyNDUsXG4gICAgICAxNixcbiAgICAgIDE3NixcbiAgICAgIDEyNCxcbiAgICAgIDgxLFxuICAgICAgMjU0LFxuICAgICAgNjcsXG4gICAgICAyMzksXG4gICAgICAxOTcsXG4gICAgICA2OCxcbiAgICAgIDE0MixcbiAgICAgIDIxOCxcbiAgICAgIDgwLFxuICAgICAgMTM1LFxuICAgICAgMTc1LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUFSSFBYNTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY4NjU2MTcxNDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hcndhX1lcIixcbiAgICBcImxpZFwiOiBcIjIyMzQyODk0NjcyNzE2NjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcXA1Z3NRL3EyeHRRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF2enJwRXNGQTkrWHNzdlBQRGxQbm10MWNGMGcrTmQxd0lpOThyRGxqU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM00wMjFwK3dQaW9UTGtCdkR2VytLS0hUVk16bG5NZW1CcEpiMmgxdWpJa0RrM2laZS9HekRnbm1UOXZUNGZMenB2Yk5FRkNENS92R3AwTytHTWdtQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieEQwOVJteXdPdnErUUNUMDdkSkhBMGhPYTBlNmNxbzFXdVRJNmcyNXl0dENLUEFRU0JWU0xUMlIrOWdVNnRBR3Y4by84d3RjMGMrMmkzaThOdGVvRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njg2NTYxNzE0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTcwNDk3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID  

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
