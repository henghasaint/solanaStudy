import { Connection,PublicKey, clusterApiUr,LAMPORTS_PER_SOL } from "@solana/web3.js";

// const connection = new Connection("https://rpc.ankr.com/solana_devnet", "confirmed");
const connection = new Connection("http://127.0.0.1:8899", "confirmed");
console.log("Connected to the devnet");
const address = new PublicKey("57TBHX3R7dwq6ev7cS1QbaKBQVozkeJiJ9tmhqw9kNLX");
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;
console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);