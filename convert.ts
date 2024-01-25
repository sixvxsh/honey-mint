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

  

  const address = '1a3bnUGmqGuh1DWzNJdsr7BnL7RM2p7C1RoSdPyL9fwjcvpGG7ccr6MQc587SydQkP5uep3CMQ87fX4dbAvcvnT';
const bytes = base58ToUint8Array(address);
console.log(bytes);


// test2 9nbsJmVCr57boZsZwYcNYDcfSFzwDena5uKseo6NEqzq

// sN3XkuH7y7YAWVey4q31BSfc86KpdiLo7HHUs8vmt9jw4qmEkxcF7S51U9cqn8NjwRDZy7Nok1EFJxcXHzGifv1
// [43,110,85,12,66,109,6,154,113,119,176,242,6,152,217,163,235,196,76,87,158,110,197,6,38,212,255,35,4,53,180,59,130,140,14,116,9,51,242,73,253,100,203,118,108,144,252,44,209,195,159,136,106,198,11,154,82,70,67,101,189,172,96,82]


// test1 4ZK8sE6sbQyESGRMfpxu3jG8XZi2ED3W1a9fXUGWQf3F
// 4WPdjjnJyZg3x9YtHsHR34fgKcDkuwkkR8g5K1xJf6egicKL84RPHtg39vzQKaqkczFCQCqzeAhwdsJjd4F9Z6HF
// [175,101,97,55,236,226,83,177,231,160,24,150,155,40,181,56,233,154,76,241,236,253,222,198,44,20,84,185,18,5,110,161,52,218,39,22,16,163,117,133,174,94,50,68,113,144,161,205,105,40,234,190,15,215,137,127,248,79,209,194,29,142,154,98]



[125,199,49,149,67,135,166,6,126,12,103,237,105,113,55,182,180,225,214,13,240,233,37,233,93,215,91,86,6,88,174,55,98,57,185,138,75,195,127,116,129,55,173,113,156,9,200,219,66,121,215,20,43,93,112,170,243,34,213,25,23,130,168]