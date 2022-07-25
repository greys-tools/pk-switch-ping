# PK Switch Ping
A small script to ping a user on Discord whenever a PluralKit switch webhook is received

## What's this?
This script is a small tool to ping a user whenever they switch using PluralKit. It exists for folks who want new system members to get notified that they have system docs to read, or to remind existing members that they may have things to do

## Setting up a bot instance
This script uses a bot token, meaning you should set up a bot instance for it. We use a bot instead of a webhook due to intending it to be hosted on Repl.it, which has issues with sending webhooks to Discord sometimes (thanks to ratelimits)

### Steps
1. Go to the [Discord dev portal](https://discord.com/developers/applications)
1. In the top right, click "New Application." Enter a name and click "Create"
1. In the left sidebar menu, click "Bot." On the page that follows, click "Add bot" and confirm it\*
1. Click the "Reset Token" button. Copy this new token and save it for later
1. In the left sidebar, go to "OAuth2" -> "URL Generator."
	- Under "Scopes" select "bot"
	- Under "Bot Permissions" select "Send Messages"
	- Copy the URL at the bottom and use it to add the bot to your server
1. You're done! Continue onto the next section

## Hosting
### Environment Variables
There are only a few environment variables for this script. They are:
- TOKEN: your bot token from earlier
- CHANNEL: the channel you want to be pinged in
- USER: your user ID on discord
- PK_SECRET: the secret received from PK for your webhook

You can view these in the `.env.example` file. Keep these in mind for the next parts

### Hosting on Repl.it
There's a Repl for this on Repl.it [here](https://replit.com/@GreyHimmel/pk-switch-ping). You'll need to fork this Repl and continue with the steps below in order to have it host your script

**Steps**
1. Fork the Repl linked above
1. Click the lock icon on the left sidebar ("Secrets") and enter each environment variable mentioned in the last section. **Make sure the names are all caps!**
1. Click the "Run" button at the top and it should now be running!

**Keeping it online**
Repl.it isn't a 24/7 host usually- instead, you have to do some extra steps to keep your Repl alive
1. Go to [UptimeRobot.com](https://uptimerobot.com/)
1. Log in or create a new account and proceed to the dashboard
1. On the left sidebar, click "Add new monitor"
1. Under "Monitor Type," click "HTTP(s)"
1. Fill out the rest of the information needed, entering the link to your Repl fork when asked for a link
1. Click "Create monitor" in the bottom right of the dialog
1. It should now be up and running for you!

### Hosting on a VPS
For this, you'll need your own VPS instance. **You should know what you're doing before trying to self-host this way!**

**Requirements**
- Nodejs 16+

**Steps**
1. Clone/download this repo onto your VPS and extract it somewhere safe
1. Copy the `.env.example` file and rename it to `.env`, then fill in the variables there
1. Open your terminal and navigate it to the extracted files
1. Run `npm install` to install the necessary packages
1. Run `node index` to run the program
1. It should now be running on your VPS

**Further setup**
If you're using a VPS, you'll likely need to set up a domain and DNS settings to make your script available to the outside world. **Unfortunately, we can't help with this,** but we do recommend using NginX to proxy traffic to your script after setting up your DNS

## PK Setup
Once you've gotten hosting set up, you'll have to run some commands in PluralKit to get the script working

1. Run `pk;s hook yoururl`, where "yoururl" should be replaced with the link to wherever you're hosting the script (eg: `https://replit.com/@GreyHimmel/pk-switch-ping`)
1. Set the `PK_SECRET` variable to the token given to you by PK and restart your script
1. Everything should now be set up properly!

## Editing the script
If you'd like to make changes, you're more than welcome to! Here are a few things to use as ideas:

1. Change the text that appears on the home page
  - Replace the text on lines 13-18 to be whatever you want!
1. Change the text that you see when you get pinged
  - Replace the text on lines 28-29 to say what you want headmates to see!
1. Add variables to address your headmates by name **(you should probably know a bit of coding for this!)**
  - As part of the above, you can also add in parts to address your headmates
  - Note that you'll need to fetch the members of the switch, then extract their names

## Support
If you need help with this, feel free to join our support server [here](https://discord.gg/EvDmXGt)