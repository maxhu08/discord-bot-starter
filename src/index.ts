import { Client, GatewayIntentBits, REST, Routes } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!"
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (err) {
  console.error(err);
}

client.on("ready", () => {
  console.log(`Logged in as ${client!.user!.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.BOT_TOKEN);
