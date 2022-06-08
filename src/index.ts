import parseMsg from "./parse";

const commands = process.argv.slice(2);
commands.map((str) => {
    console.log(JSON.stringify(parseMsg(str)));
});
