// contract test code will go here
const ganache = require("ganache-cli");
const mocha = require("mocha");
const assert = require("assert");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  web3.eth.getAccounts().then((val) => {
    console.log(val);
  });
});

describe("Inbox, ()", () => {
  it("deploys a contract", () => {});
});
