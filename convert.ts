// exporting from a bs58 private key to an Uint8Array
// == from phantom private key to solana cli id.json key file
// npm install bs58 @solana/web3.js

import web3  from "@solana/web3.js";
// import { Keypair } from "@solana/web3.js";
import * as bs58 from "bs58";




import { Keypair, PublicKey } from "@solana/web3.js";
import * as fs from "fs"
import * as buffer from "buffer";





// Final script
function base58ToUint8Array(base58String: string | any[]) {
    const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const base = alphabet.length;
    const bytes = [0];
    let i, j, carry;
  
    for (i = 0; i < base58String.length; i++) {
      carry = alphabet.indexOf(base58String[i]);
      if (carry === -1) {
        throw new Error('Invalid Base58 string');
      }
      for (j = 0; j < bytes.length; j++) {
        bytes[j] *= base;
      }
      bytes[0] += carry;
      for (j = 0; j < bytes.length; j++) {
        if (bytes[j] > 255) {
          if (bytes[j + 1] == null) {
            bytes[j + 1] = 0;
          }
          bytes[j + 1] += Math.floor(bytes[j] / 256);
          bytes[j] %= 256;
        }
      }
    }
    return new Uint8Array(bytes.reverse());
  }

  

  const address = '2BaV11dsovKiJ6uazisbn6RD7CEcbLQSrAjdieNr4Jw2BjwqjiJgRhotPVfVm3vuwSxMCJQGoibBknJv7SQE5BQ9';
const bytes = base58ToUint8Array(address);
console.log(bytes);
