const discordjs = require ('discord.js')
import { config } from "dotenv";
config();

import DiscordClient from "./client/client";
import "./api/notifications";

const client = new DiscordClient(
	{
		dbUrl: process.env.DB_URL,
		baseDir: __dirname,
		commandsDir: "./commands",
		eventsDir: "./events/clientEvents",
		owners: ["631390340598857728"],
	},
	{	disableMentions: "everyone",
		messageCacheLifetime: 864e5 * 7,
		partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "USER", "REACTION"],
	}
);

(async () => {
	client.connect();
	client.start(process.env.DISCORD_BOT_TOKEN);
})();
