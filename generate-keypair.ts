import { Keypair } from "@solana/web3.js";
// 生成密钥对
const keypair = Keypair.generate();

// 写入.env文件
const fs = require('fs');
fs.appendFileSync('.env', `\n${keypair.secretKey.toString()}`);

// 打印密钥对   
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);