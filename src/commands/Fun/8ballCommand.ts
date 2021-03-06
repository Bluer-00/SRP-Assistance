import { Message } from "discord.js";
import BaseCommand from "../../utils/structures/baseCommand";
import DiscordClient from "../../client/client";

const ball: Array<string> = [
	"π± | As I see it, yes,",
	"π± | Better not tell you now,",
	"π± | Cannot predict now,",
	"π± | Concentrate and ask again,",
	"π± | Donβt count on it,",
	"π± | It is certain,",
	"π± | It is decidedly so,",
	"π± | Most likely,",
	"π± | My reply is no,",
	"π± | My sources say no,",
	"π± | Outlook not so good,",
	"π± | Outlook good,",
	"π± | Reply hazy, try again,",
	"π± | Signs point to yes,",
	"π± | Very doubtful,",
	"π± | Without a doubt,",
	"π± | You may rely on it,",
	"π± | Yes,",
	"π± | Yes β definitely,",
];

export default class eightballCommand extends BaseCommand {
	constructor() {
		super("eightball", {
			category: "Fun",
			aliases: ["8ball"],
			description: "8ball will answer all your questions",
			usage: "<question including ?>",
			channelType: "both",
			ownerOnly: false,
		});
	}

	async run(client: DiscordClient, message: Message, args: Array<string>) {
		if (
			!args
				.map((a) => a)
				.join(" ")
				.toString()
				.endsWith("?")
		)
			return message.channel.send(
				"> β | I can not answer your question without one (add a ? to your question)"
			);

		const choice = ball[Math.floor(Math.random() * ball.length)];
		return message.channel.send(`> ${choice} **${message.author.username}**.`);
	}
}
