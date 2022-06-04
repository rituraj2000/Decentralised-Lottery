// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inbox = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inbox, "utf8");

console.log(solc.compile(source, 1));
