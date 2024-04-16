const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "vinixmc.net",
  username: "oldMarius",
  auth: "microsoft",
  version: "1.19",
});

bot.on("spawn", () => {
  console.log("I am in " + bot.username);

  setTimeout(() => {
    bot.setControlState("forward", true);
    setTimeout(() => {
      bot.setControlState("forward", false);
    }, 500);
  }, 2000);
});
bot.on("disconnect", (d) => {
  //console.log(d.value.extra.value)
});
bot.on("kicked", (err) => {
  console.log(err.value?.extra?.value?.value[0]?.text);
});
bot.on("error", (err) => {
  console.log(err);
});
let i = false;
bot.on("messagestr", (message) => {
  console.log(message);
});
