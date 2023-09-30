import { initializeKeypair } from "./initialize"
import { Connection, clusterApiUrl, PublicKey, Signer, Keypair, LAMPORTS_PER_SOL, } from "@solana/web3.js"
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  NftWithToken,
  BigNumber,
  Metadata,
} from "@metaplex-foundation/js"
import * as fs from "fs"
import * as web3 from "@solana/web3.js";
import { createAssociatedTokenAccount, getAssociatedTokenAddress, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import bs58 from "bs58";
import axios from 'axios'





// const connection = new Connection(clusterApiUrl("devnet"));
// const owner = await initializeKeypair(connection);
// const pubkeey = owner.publicKey;
// console.log("pubkey", pubkeey);


//  best config
const rpcUrl = "https://aged-red-snow.solana-mainnet.quiknode.pro/fb65b51e8c315a67b87c24163f238dce6f5b46c9/";
// const rpcUrl = "https://frosty-floral-wind.solana-devnet.quiknode.pro/fa3c7dec03be0b5335ff2905b342eedf94ada834/";
const connection = new Connection(rpcUrl, 'confirmed');
const owner =  Keypair.fromSecretKey(
  bs58.decode(
      "51mxW1V8tRiJTKTUUS3k9KRa6R9rHxUqhHHDZ7fJ8hWwMCccL3VReXhCED9hYZhVGQVCsaFbw1vpfhKykp9MvWD1"
  )
);
// const owner = await initializeKeypair(connection);
const pubkeey = owner.publicKey;
console.log("pubkey", pubkeey);






// const metaplex = Metaplex.make(connection)
//   .use(keypairIdentity(madHoneySecret))
//   .use(bundlrStorage());





const metaplex = Metaplex.make(connection).use(keypairIdentity(owner)).use(bundlrStorage({
  address: "https://devnet.bundlr.network",
  providerUrl: "https://api.devnet.solana.com",
  timeout: 10000,
}))





// const wallet = Keypair.fromSecretKey(
//   bs58.decode(
//     "3gQHgy2JZjKnS658FeyG12yN72t6d1Mw84bjr2q1zm2MhrymQYGeVyn1fNjGc4MhtDrqsxvjgaM9Rvx3UTihPxng"
//   )
// );



// const owner = new PublicKey("GxDjr5argqsSYpBimc8Xkw5Keb7MaDdQHBTY1y9BtPDc");

// const nfts = await metaplex.nfts().findAllByOwner({ owner:pubkeey});

// const result = nfts.map(item => {
//   return {
//     name: item.name,
//     mintAddress: (item as any).mintAddress
//   };
// });
// const resultString = JSON.stringify(result, null, 2);
// fs.writeFileSync('100nftmint-2.txt', resultString);
// console.log('Result', result);










// async function uploadImages() {
//   const imageFolder = './HLTicket';
//   const files = fs.readdirSync(imageFolder);

//   for (const file of files) {
//     if (file.endsWith('.jpg')) {
//       const buffer = fs.readFileSync(`${imageFolder}/${file}`);
//       const metaplexFile = toMetaplexFile(buffer, file);
//       const imageUri = await metaplex.storage().upload(metaplexFile);
//       console.log(`Image URL for ${file}:`, imageUri);
//     }
//   }
// }

// uploadImages();








// try {
//   async function uploadMetadata() {
//     const file1 = fs.readFileSync('HLticketCollection.json');
//     const metadata = JSON.parse(file1.toString());

//     // Read from file1
//     for (let i = 0; i < metadata.length; i++) {
//       const { uri } = await metaplex.nfts().uploadMetadata({
//         name: metadata[i].name,
//         description: metadata[i].description,
//         image: metadata[i].image,
//         seller_fee_basis_points: 500
//       });
//       const nftName = metadata[i].name; // Store the name separately
//       console.log(`Metadata URI for ${nftName}:`, uri);
//     }
//   }

// } catch (Error) {
//   console.log(Error);
// }

// uploadMetadata();





// function uploadMetadata() {
//   throw new Error("Function not implemented.");
// }




// const file1 = fs.readFileSync('twonft.json');
// const metadata = JSON.parse(file1.toString());



// const { uri } = await metaplex.nfts().uploadMetadata({
//   name: "Honeyland Land Tickets",
//   symbol: "HL_TCKT",
//   description: "This collection contains in-game NFTs and SFTs for Honeyland play + own game. They have different rarities and utility to strengthen your colony and get advantages in gameplay.",
//   image: "https://arweave.net/hA8mHJDkh7qTTp2rRI8h85DbUH-eT2ucFH4rgfifkzM",
//   seller_fee_basis_points: 500 , 

// });
// // const nftName = metadata[i].name; // Store the name separately
// console.log(`Metadata URI for :`, uri);







// const rawData = fs.readFileSync('twonft.json');
// // console.log("rawdata before parse", rawData);
// const metadata = JSON.parse(rawData.toString());
// console.log("data after parse", metadata);


// const nft_address = new PublicKey("6fpMdSdfGKE4LmkWnTtvemnQi1a2HkzeX96qTdgEUfFq");
// const NFT = await metaplex.nfts().findByMint({mintAddress:nft_address});
// const  mint  = NFT.mint.address;
// const payer = new web3.PublicKey("GpFuzeBf6oQm98fiTr375rb8HfmgjQA2nU7CwZgG7dtC");

// // // console.log("address" , NFT.address.toBase58());
// // // // // // // // // console.log("COLLECTION" , NFT.collection?.address.toBase58());
// // // console.log("METADATA" , NFT.metadataAddress.toBase58());
// // // // // // // // console.log("address" , NFT.editionNonce);
// // // // // // // // // console.log("Toeken address" , );


// const tokenAddress = await getAssociatedTokenAddress(mint, payer);
// console.log("Token address" , tokenAddress);




// const collectionUpdateAuthority = Keypair.generate();
// console.log('colluppA publickey:' , collectionUpdateAuthority.publicKey.toBase58());
// const mint = Keypair.generate();
// console.log('mint publickey:' , mint.publicKey.toBase58());
// const collection = Keypair.generate();
// console.log('collection publickey:' , collection.publicKey.toBase58());







// create new collection
// const {nft} = await metaplex.nfts().create(
//   {
//     uri:"https://content.honey.land/assets/collections/honeyland_passes.json",
//     name:"Honeyland Passes2",
//     sellerFeeBasisPoints: 500,
//     symbol: "HL_PASS2",
//     isCollection: true,
//     collectionIsSized: true,
//   }
// );
// console.log(
//   `collection Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
// console.log(`collection mint address: ${nft.mint.address}`);
// const collectionNft = nft.mint.address;



//=================================================================================================================================//
// updating existing nft
// const nft_address = new PublicKey("7TxsvCdgZuGdT6qPpGGEpZsarkLkjkTA6FMy55ZY1nPC");
// const NFT = await metaplex.nfts().findByMint({mintAddress:nft_address});

// await metaplex.nfts().update(
//   {
//     // uri: "https://content.honey.land/assets/legends/awards/worldcup.json",
//     nftOrSft: NFT,
//     // newUpdateAuthority: new PublicKey("Av636SfEEBBmrn5UYMH67TLQredoBMoCxnPyJzc6xdSd"),
//     collection: new PublicKey("sATUL6ewWTsnTystNrLhic4BRiA48uFi83WeA6jdEdv"),
//     // authority: owner,

//   }
// );
// console.log(
//   `Token Mint: https://explorer.solana.com/address/${NFT.address.toString()}?cluster=devnet`);
// console.log("NFT COLLECTION WAS UPDATED");


//=======================================================================================================================================





// // creating collection nft 
// const { nft } = await metaplex.nfts().create(
//   {
//     uri: "https://content.honey.land/assets/collections/honeyland_generations_items.json",
//     name: "Honeyland Items",
//     sellerFeeBasisPoints: 410,
//     symbol: "HL_ITEM",
//     isCollection: true,
//     collectionIsSized: true,
//   },
// );
// console.log(
//   `collection Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);

// const collectionNft = nft.mint.address;





//==================================================================

// const nft = "9GCJNKorPdTuPrRefpcsrQ9o3g6XoK5Wtbzbuqx4rsxe";

// unverify collection nft
// await metaplex.nfts().unverifyCollection(
//   {
//     mintAddress: new PublicKey("37KpehJKubaxq9GNBA62Czdmu84w9VNQ9c3Rx8UKLzLp") ,
//     collectionMintAddress: new PublicKey ('8ujipTijc7DD1R3fCHdYoP72gFWt1Mnm2iw5KEEn9RZQ') ,
//     collectionAuthority: owner,
//   }
// );

// console.log('unverified');

// ==============================================================


// verifycollection
// await metaplex.nfts().verifyCollection(
//   {
//     mintAddress: new PublicKey("7TxsvCdgZuGdT6qPpGGEpZsarkLkjkTA6FMy55ZY1nPC"),
//     collectionMintAddress: new PublicKey("sATUL6ewWTsnTystNrLhic4BRiA48uFi83WeA6jdEdv"),
//     isSizedCollection: true,
//   }
// )
// console.log("NFT COLLECTION VERIFIED");








// ========================================================================




// creating new nft with metadata
// try {
//   for (let i = 0; i < metadata.length; i++ ) {
//     const {nft} = await metaplex.nfts().create(
//       {
//         uri: metadata[i].uri, // metadata URI(off-chain)
//         name: metadata[i].name,
//         symbol: metadata[i].symbol,
//         // sellerFeeBasisPoints: metadata[i]['json']['seller_fee_basis_points']
//         sellerFeeBasisPoints: 410, 
//         // tokenStandard: metadata[i].tokenStandard,
//         isMutable: true,
//         // primarySaleHappened: metadata[i].primarySaleHappened,
//         // maxSupply: metadata[i]['edition']['maxSupply'],
//         // collection: new PublicKey("CEHgQXEt4FyqgTv92jwGbRZ43C14igodmLQSzhSVvFcf"),
//         mintTokens: true,
//       }
//     );
//     // await metaplex.nfts().verifyCollection(
//     //   {
//     //     mintAddress: nft.mint.address,
//     //     collectionMintAddress: new PublicKey("CEHgQXEt4FyqgTv92jwGbRZ43C14igodmLQSzhSVvFcf"),
//     //     isSizedCollection: true,
//     //   }
//     // );  
//     const nftName = metadata[i].name; // Store the name separately

//     console.log(`NFT MINT FOR ${nftName}===> ${nft.address.toString()}`);
//     // console.log(
//     //   `NFT COLLECTION: https://explorer.solana.com/address/${nft.collection.toString()}?cluster=devnet`
//     // );
//     // console.log(
//     //   `NFT METADATA: https://explorer.solana.com/address/${nft.metadataAddress.toString()}?cluster=devnet`
//     // );
//     // console.log(`nft mint address: ${nft.mint.address}`)
//   };
// } catch (error) {
//   console.log("ERROR IN MINT");
//   console.error(error);
// };





// const {nft} = await metaplex.nfts().create(
//   {
//     uri: "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets_platinum_pass/126.json", // metadata URI(off-chain)
//     name: "Platinum Pass #126",
//     symbol:"HL_Pl" ,
//     // sellerFeeBasisPoints: metadata[i]['json']['seller_fee_basis_points']
//     sellerFeeBasisPoints: 500, 
//     tokenStandard: 0,
//     isMutable: true,
//     // primarySaleHappened: ,
//     // maxSupply: ,
//     // collection: new PublicKey("G5WvFzffVU2vLW7Eitym5ebobmFAkXfvtqgkdi2ZJprB"),
//     mintTokens: true,
//   }
// );
// await metaplex.nfts().verifyCollection(
//   {
//     mintAddress: nft.mint.address,
//     collectionMintAddress: new PublicKey("G5WvFzffVU2vLW7Eitym5ebobmFAkXfvtqgkdi2ZJprB"),
//     isSizedCollection: true,
//   }
// );  
// console.log(
//   `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
// //     console.log(
//     `NFT CREATORS: https://explorer.solana.com/address/${nft.creators.toString()}?cluster=devnet`
//   );
//   console.log(
//     `NFT EDITION: https://explorer.solana.com/address/${nft.edition.toString()}?cluster=devnet`
//   );
//   console.log(
//     `NFT METADATA: https://explorer.solana.com/address/${nft.metadataAddress.toString()}?cluster=devnet`
//   );
//   console.log(`nft mint address: ${nft.mint.address}`);






// const {nft} = await metaplex.nfts().create(
//   {
//     uri: "https://content.honey.land/images/legends/awards/worldcup.jpg", // metadata URI(off-chain)
//     name: "2022 honey World Cup Champion",
//     symbol:"HL_LGND" ,
//     // sellerFeeBasisPoints: metadata[i]['json']['seller_fee_basis_points']
//     sellerFeeBasisPoints: 500, 
//     tokenStandard: 0,
//     isMutable: true,
//     // primarySaleHappened: ,
//     // maxSupply: ,

//     // collection: new PublicKey("5gCu1LdgCmwMjdNHfhGnWV3smrwNJGK85dT5EHN3djtd"),
//     // mintTokens: true,
//   }
// );
// // await metaplex.nfts().verifyCollection(
// //   {
// //     mintAddress: nft.mint.address,
// //     collectionMintAddress: new PublicKey("5gCu1LdgCmwMjdNHfhGnWV3smrwNJGK85dT5EHN3djtd"),
// //     isSizedCollection: true,
// //   }
// // );  
// console.log(
//   `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
// // console.log(`nft mint address: ${nft.mint.address}`)












// ================================================================


// it returns all nft based on name and mintaddress
// const getNFTsForOwners = async () => {
//   const promises = publicKeyList.map(async (ownerPublicKey) => {
//     const owner = new PublicKey(ownerPublicKey);
//     const nfts = await metaplex.nfts().findAllByOwner({ owner });

//     const result = nfts.map(item => {
//       return {
//         name: item.name,
//         mintAddress: (item as any).mintAddress
//       };
//     });

//     return result;
//   });

//   const ownerNFTs = await Promise.all(promises);
//   return ownerNFTs.flat();
// };

// // it returns all of pda accounts based on a program
// const stakeProgramId = new PublicKey("37HsMb2NSamepLG98j7MyYiB9E5tDBzsPYWVmoR32sJ2");

// const accountinfo = await connection.getParsedProgramAccounts(stakeProgramId);
// console.log("Pdas" , accountinfo);

// const PdaList = accountinfo.map((account) => account.pubkey.toBase58());

// console.log("PDAs OWNED BY PROGRAM:", PdaList);

// const ownerNFTs = await getNFTsForOwners(PdaList);
// console.log("NFTs OWNED BY PDAs:", ownerNFTs);





















// const getNFTsNameBasedMint = async (AllmintList: string[]) => {
//   const promises = AllmintList.map(async (mintAddress: any) => {
//     const mint = new PublicKey(mintAddress);
//     const mintNftslist = await metaplex.nfts().findAllByMintList({ mint });

//     const result = mintNftslist.map(item => {
//       return {
//         name: ,
//         mintAddress: (item as any).mintAddress
//       };
//     });
//     return result;
//   });

//   const ownerNFTs = await Promise.all(promises);
//   return ownerNFTs.flat();
// };


// const PdaList = accountinfo.map((account) => account.pubkey.toBase58());

// console.log("PDAs OWNED BY PROGRAM:", mintList);

// const ownerNFTs = await getNFTsNameBasedMint(mintList);
// console.log("NFTs OWNED BY PDAs:", ownerNFTs);





// const ownerr = new PublicKey("3SaJT58yswfjYwMkur9AmdNGntUpBy6MvCVB2oTk4tDH");
// const nfts = await metaplex.nfts().findAllByOwner( {ownerr});



// try {

//   const list = fs.readFileSync('MintListTickets.json' , 'utf-8');
//   const mintlist = JSON.parse(list);

//   const getNfts = await metaplex.nfts().findAllByMintList({ mints: [mintlist] }) as Metadata[];

//   const result = getNfts.map(item => {
//     return {
//       name: item.name,
//       mintAddress: item.mintAddress
//     }
//   })

// } catch (Error) {
//   (Error);
// }





// try {
//   const mintA = new PublicKey("Hmdo53rSurM9EVDoUfxZRFHjbMRSmCuWUEPcsgmo1WDq");
//   const mintB = new PublicKey("9icC68yzXDEkPu9kjceCb6DGfR9z8Fe84eSxLrvrFSUG");
//   const getNfts = await metaplex.nfts().findAllByMintList({ mints: [mintA , mintB] }) as Metadata[];

//   console.log('Nfts metadata' , getNfts);

// } catch (error) {
//   console.error('Error:', error);
// }






// const getNFTsForOwners = async (publicKeyList: string[]) => {
//   const promises = publicKeyList.map(async (ownerPublicKey) => {
//     const owner = new PublicKey(ownerPublicKey);
//     const nftMetadata = await metaplex.nfts().findAllByOwner({ owner });

//     // const result = nftMetadata.map(item => {
//     //     return {
//     //         mintAddress: (item as any).mintAddress
//     //     };
//     // });
//     console.log('nftMetadata' , nftMetadata);
//     return nftMetadata;
//   });

//   const ownerNFTs = await Promise.all(promises);
//   // return ownerNFTs.flat();
// };

// // return pubkey of each pda
// const madHoneyMints = [
//   "D3pqBMSRHPgYhbseWmD5zYzLqy3mxii4fFVePkJnxiF6",
//   "FKew8gxRmHVuujTUDmA92qaixUYfABRnCeJn1r1xi8nP",
//   "G8iku5W67o4CAqKbyWJZkhVsMqMU3J2JZCFujGuCTT6n",
// ]


// // return an array of mint addresses Object of each nft that has staked in staking program
// const nftsFoundInStakingPool = await getNFTsForOwners(madHoneyMints);
// console.log('Fetched all NFTs From Staking Pool (On-Chain-Array)' , nftsFoundInStakingPool);








//it's best to find nft metadata
// find all nft data by mint list
// try {
//   console.log("before reading");

//   // const mintAddresses = fs.readFileSync('MintListTickets', 'utf-8');
// const mintAddress: PublicKey[] =
//   [
//     new PublicKey("12KvBdn5iDf6EvtjyuR3iNWAF4LpRfrdazUrkGzyFY6E"),
//     new PublicKey("28tEkfCV9ycDNjKQNF2TYcWST52sssavRt3qGs9azG9C"),
//   ]


//   console.log("after reading");

// const getNfts = await metaplex.nfts().findAllByMintList({ mints: mintAddress }) as Metadata[];

// console.log(JSON.stringify(getNfts));

//   let fileContent = '';
//   getNfts.forEach((nft) => {
//     axios.get(nft.uri).then(res => {
//       // how to fetch Type, Generation and Mood from the json
//     })
//     fileContent += `Name: ${nft.name}\n Mood:${nft.model}\n Mint Address: ${nft.mintAddress.toString()}\n\n`;
//   });

//   fs.writeFileSync("Scammed user's assets", fileContent);

//   console.log('NFT data written to nftData.txt file.');
// } catch (Error) {
//   console.error('Error:', Error);
// }


// ==================================




// async function fetchNftData() {
//   try {
//     console.log("before reading");

//     const mintAddress = [
//       new PublicKey("CjWnaiFFVe5kg2ri74SYCRReh2iprRrmejH1rnstJ4Mc"),
//       new PublicKey("DgG11U2WaKpULBknFJUbcAwFjvWJ1e8W9hSAxYEX7hwr"),
//       new PublicKey("DpYZb7UwLsctqDHRVUoYt9pw1XyTTvjodnwJGfZkWF2K"),
//       new PublicKey("EpFuasy3EcqWLKkqKGEYFbMWugajJv6njgMAVEeztoEP"),
//       new PublicKey("F29VNyQU7w8wYXGiQePjfav4Q4mT1hQj8wdqwTMsUsHw"),
//       new PublicKey("F5BBR8z1TJyZArjUrmEe61uznFWKnw8B3uTZgP15UMX3"),
//       new PublicKey("GovZvvdPbsx53UQ5HB5wWWZTV74q4gP8mKBvkvDMkDeD"),
//       new PublicKey("JAfRNs5qCa1pZawcrzMwKD9QuQbEYPogJ7Fyiq1Ee7wC"),
//       new PublicKey("g4sGtf36uuEKJXZVdhJL1aoJB4DAqAZMyWGBW4PB3dJ"),
//       new PublicKey("nW9g9FunYSBdUSu4PLSTDBqcBCPVDyLc1Ve59sZzZ9Q"),
//       new PublicKey("Ai1JfPTZkwwGEbyw2ag38LGhiNEhd6qNsV4V3oTVu4EY"),
//       new PublicKey("BEQP9jTzM7ATwEsvFnoeaqra7EHdLGPshs2PkUXS2w2T"),
//       new PublicKey("DFW2DtRxM1kpv6jMUW5KN8s7oCbhECxRqGfSa2dkbZhd"),
//       new PublicKey("GyZhuwpDj4Bf8Lg4F1Gk1GY77FwQ2LCuDbnQfRP1FEQ1"),
//       new PublicKey("H6hBMszrD3LVy5W1i6pyce6pWTEKvStRAL5nQU75j9zA"),
//       new PublicKey("5dtsU5sRDrtsvt4RsqFkXdVSFjaanNDNR371ga2JcLcu"),
//       new PublicKey("FxW65vB2a9uakY9gZP6zf5dhfQr5bzAxrdNzmPm6dPxu"),
//       new PublicKey("2LsByUBoZXG3E4B3gNdDwGHoQy93EHztqADkqWf2w5iQ"),
//       new PublicKey("2vQdsA1t8a9E39KCX4bAyHKXeVcvD1iCAm2bQi6xjRCc"),
//       new PublicKey("3e5tiWsiuc56vmZaBt6Qtavy4VVZFogHKH4gYgyxTrdu"),
//       new PublicKey("3kPmbei3n7NMMiFFUbqJRZ7dbzDN2jGcq2KBkVtNSEte"),
//       new PublicKey("3qN8nrHM9WpdyecCkdbUsrkUpUKaZ71qqcdnQRG6Wtdu"),
//       new PublicKey("3tE8i8Vt2NA5JL2HcDfc5fu9pfn6Bb2GNy3SqboAWRPn"),
//       new PublicKey("3uUnW1MASoAqRXatipAVRFRBmd14VAZMWp166NKG8XW8"),
//       new PublicKey("4igMMJ2PoA3oWqT2m1mw6v8Uj2UHFjAKQM9PMRYEoCWW"),
//       new PublicKey("4yTWBgM8SJQi1iFkDXqHjCMgE2NZtbkiyCTkxqTQ5dap"),
//       new PublicKey("4yrZV2PS5XNFJSc3rTNWSmWpVdmepmgdoDLxL7KkpDqX"),
//       new PublicKey("4zU8iiG2xtsFayvWxz2Totbyq48PxxcA7CVc9j39Vqap"),
//       new PublicKey("51ECDYaf2UFcmkwKgRRmP1AWYjkyyE6brEUSekakcTWA"),
//       new PublicKey("5y1i5KfNGLFxE3MLCVL9fgFsKpeDpRRbLhzrmADFmD5P"),
//       new PublicKey("6a1441XvMwzx6fQ61uYhaNNJ4w8p9MEbFjhD5gXGAWN8"),
//       new PublicKey("6gaUUBCUBdTKphzhrTRw8aBNmBxHxExKaD1ioe4u3Gf7"),
//       new PublicKey("6wbC2n8udiZFYDwBkj9zSHcKwYKDMH6fHqFpw1CYYpg5"),
//       new PublicKey("6zaPtccLJzK3Qc2ZYLoBkWdLLtJdkDjZb34ShDFrsZ5v"),
//       new PublicKey("719tL7a4h97ar2pkDbJYbh15MDznoZXVuBHrS4Gwaq4L"),
//       new PublicKey("8CjwrpTsQVCtChq8VWN8JPrCtA6EvF6UdYvHJbSPVc76"),
//       new PublicKey("8WJXktqL1LZk2uNtSa7JsZJ2anTuEbxHPx6nKzMZqx7f"),
//       new PublicKey("8e4EtAAB28Mz93vF3nQn7nYaCDBR6xUhwJ4VPeehtzuq"),
//       new PublicKey("8gpt4Nz7ogsmTa9TXrHh4rPFX2eUdCcAjhZz4VuWPf7r"),
//       new PublicKey("8vCrM7HG2DqkiXQEYJ7DPSRNSumEiq2hUFEUaUWYQbqb"),
//       new PublicKey("ALLkMcTzs5oWJHXtkLXQq5z2eSVw3Z8s3NVXwdQcN7KP"),
//       new PublicKey("AXQi3SbfdhxY8ruoAC3q3BPVdUCjjETEZVGPbF5qPZa7"),
//       new PublicKey("AiWboM4aDCqLNXwJsbmi2hZECSGEDDU43haB1m3QwziH"),
//       new PublicKey("AmTdyJgmq5BH8yQH6k9PMPbpeyBK82WzVpMGTAXXU7F6"),
//       new PublicKey("AsNQWrJ4DKgpNGygzNLznfdrTBKs7sHsr4q2jAimRDks"),
//       new PublicKey("BUK3Bm8EVqTRDpKFPcNfoV8jLRefGZyKsCrS1CPNdCWu"),
//       new PublicKey("Bt7gujjWJVaVUV2yfb1LbTMDoWVr9U1WbNs1NLJYfpX"),
//       new PublicKey("Cq8LEfA45pDD4Tjdw7an1SmokEyYnJCiX1W98nvhFSb2"),
//       new PublicKey("DMioxedqzSW8NdKyBjLmG7BiMtxCKZq7WFT3TzZ6QK4E"),
//       new PublicKey("E4ugbQi8vWxhLnKiZynWHPgBmEZX62XaVBgKZJvgkb9Y"),
//       new PublicKey("ELD4XjgBoMa2f35NBYC5XuYeADr3CHqUEmXkVvYVF3w4"),
//       new PublicKey("EMwE9zZ9KJkdHcftAw1PQp9oHycv3vP7UrZMxrKyHBxD"),
//       new PublicKey("FXGE5XWowRLCXb4czjU83xwwudUu5YpTTPzxJ5j3whgf"),
//       new PublicKey("FnJMyWak995i7TK7J6E4RNhR3ygR6cSYEpUWACEofrjM"),
//       new PublicKey("Fnykf91hCSaa22ZZDqg3zemaGtdpxzyus4CfM1Ry25sQ"),
//       new PublicKey("G7swA7ma7qgVWS1upRboQBTn6entPkiq52tBtWGWoei9"),
//       new PublicKey("GaCvvH5RRGkaMBLSsD7siYxUizutHUgCuUkDJ3z2xMZm"),
//       new PublicKey("GnNwwxfHx7TdW6Cq6vUcbUsZgBbKxGZXnuptNU7GSg6S"),
//       new PublicKey("H4gceV1ruPvMXzLQVCZNLxaKaiy1Rg6t43x8459m7PqF"),
//       new PublicKey("H6hPgVir4S8B7UJNM66SdfG1txXBDQxu777q4hp8zaCY"),
//       new PublicKey("HV63DusDroYyEGmCehtFPXG1ZMBeqhJr4eDRRzWn1YWR"),
//       new PublicKey("NbXFvc9eHWWg7gNR2PE2aH8Fuu8BicX3mZJGwFC7dT7"),
//       new PublicKey("NjTnXYW4NHrpDvszGWYAVwda6cKK3B5BBTQ7ZsvcAKH"),
//       new PublicKey("WL3tptrLCikJ1EXG8WktaBUiiVWksbjNU6E9wPdGueb"),
//       new PublicKey("uPeEFZ7u3mZ9jjrs4u9Vgo6MgZ8dGBLaNK2WdfGh9NJ"),
//       new PublicKey("zT7YKGSNJHftCdvq8uXZY4Aho9j7ZMRkGeazwbdhfcA"),
//     ];

//     const nftData: {
//       name: string;
//       mintAddress: string;
//       Type?: string;
//       Generation?: string;
//       Mood?: string;
//     }[] = [];

//     const getNfts = await metaplex.nfts().findAllByMintList({ mints: mintAddress }) as Metadata[];

//     for (const nft of getNfts) {
//       const response = await axios.get(nft.uri);
//       const json = response.data;

//       // Extracting data from attributes array
//       const attributes = json.attributes;

//       const TypeAttribute = attributes.find((attribute: any) => attribute.trait_type === "Type");
//       const GenerationAttribute = attributes.find((attribute: any) => attribute.trait_type === "Generation");
//       const MoodAttribute = attributes.find((attribute: any) => attribute.trait_type === "Mood");

//       const Type = TypeAttribute ? TypeAttribute.value : undefined;
//       const Generation = GenerationAttribute ? GenerationAttribute.value : undefined;
//       const Mood = MoodAttribute ? MoodAttribute.value : undefined;

//       // Extracting data from metadata
//       const name = nft.name;
//       const mintAddress = nft.mintAddress.toString();

//       // Add the extracted data to nftData
//       nftData.push({ name, mintAddress, Type, Generation, Mood });

//       // You can also log the data here if needed
//       // console.log(`Name: ${name}\nMint Address: ${mintAddress}\nType: ${Type}\nGeneration: ${Generation}\nMood: ${Mood}\n`);
//     }

//     // Convert nftData to a string
//     const fileContent = JSON.stringify(nftData, null, 2);

//     fs.writeFileSync("Scammed user's assets3.json", fileContent);

//     console.log('NFT data written to Scammed user\'s assets3.json file.');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchNftData();



// ==============================================================



// const file1 = fs.readFileSync("scammed user's assets.json");
// const metadata = JSON.parse(file1.toString());

// function countBeeGenerationsMoods(data: any[]) {
//   const generationCounts: Record<string, number> = {};
//   const moodCounts: Record<string, number> = {};

//   for (const item of data) {
//     const { Type, Generation, Mood } = item;

//     // Count Bee by Generation
//     if (Type === "Bee" && Generation) {
//       if (generationCounts[Generation]) {
//         generationCounts[Generation]++;
//       } else {
//         generationCounts[Generation] = 1;
//       }
//     }

//     // Count Bee by Mood
//     if (Type === "Bee" && Mood) {
//       if (moodCounts[Mood]) {
//         moodCounts[Mood]++;
//       } else {
//         moodCounts[Mood] = 1;
//       }
//     }
//   }

//   // Display counts for Bee by Generation
//   for (const gen in generationCounts) {
//     console.log(`There are ${generationCounts[gen]} Bee with ${gen}`);
//   }

//   // Display counts for Bee by Mood
//   for (const mood in moodCounts) {
//     console.log(`There are ${moodCounts[mood]} Bee with ${mood} Mood`);
//   }
// }

// countBeeGenerationsMoods(metadata);







// ============================================


const file1 = fs.readFileSync("scammed user's assets.json");
const metadata = JSON.parse(file1.toString());

function countBeeGenerationsMoods(data: any[]) {
  const generationMoodCounts: Record<string, Record<string, number>> = {};

  for (const item of data) {
    const { Type, Generation, Mood } = item;

    // Count Bee by Generation and Mood
    if (Type === "Bee" && Generation && Mood) {
      if (!generationMoodCounts[Generation]) {
        generationMoodCounts[Generation] = {};
      }

      if (!generationMoodCounts[Generation][Mood]) {
        generationMoodCounts[Generation][Mood] = 1;
      } else {
        generationMoodCounts[Generation][Mood]++;
      }
    }
  }

  // Display counts for Bee by Generation and Mood
  for (const gen in generationMoodCounts) {
    for (const mood in generationMoodCounts[gen]) {
      console.log(`There are ${generationMoodCounts[gen][mood]} Bee with Gen ${gen} and Mood ${mood}`);
    }
  }
}

countBeeGenerationsMoods(metadata);
















// console.log('nftB' , nftB);



// const mintlist = ["7U9CEGcxPihWkZgR7TKGnGUPokvsK5RHaMfB11WCbqui", "3X6VJujDJMr1yfXJdt3M4ZmubGUL2GyNZ7eSvk4wQkWX"]


// const findmintNfts = await metaplex.nfts().findAllByMintList(mintlist);




// // Assuming you have an array of mints called 'mintList'
// const nftList = await metaplex.nfts().findAllByMintList({
//   mints: mintList
// });



// (async () => {
//   // const solana = new web3.Connection("https://docs-demo.solana-mainnet.quiknode.pro/");
//   const publicKey = new web3.PublicKey(
//     "3dgCCb15HMQSA4Pn3Tfii5vRk7aRqTH95LJjxzsG2Mug"
//   );
//   console.log('result', await connection.getSignaturesForAddress(publicKey, { limit: 1 }));
// })();


// (async () => {
//   const solana = new web3.Connection("https://aged-red-snow.solana-mainnet.quiknode.pro/fb65b51e8c315a67b87c24163f238dce6f5b46c9/");
//   const publicKey = new web3.PublicKey(
//     "3dgCCb15HMQSA4Pn3Tfii5vRk7aRqTH95LJjxzsG2Mug"
//   );
//   console.log(await solana.getSignaturesForAddress(publicKey, { limit: 1 }));
// })();




// (async () => {
//   const solana = new web3.Connection("uri");

//   const fetch_tx = await solana.getParsedTransaction(
//     "6s2gAhFQceaHWnpuj2d1FKzTDpbwdefmp2hKdzs1qAaPuLUJqc9urAjAxQrXLYCuGa7w4bHnybP22kphSp9XoHe",
//     { maxSupportedTransactionVersion: 0 }
//   )


  // if (fetch_tx) {
  //   const accountKeys = fetch_tx.transaction?.message?.accountKeys;

  //   if (accountKeys) {
  //     console.log(accountKeys);
  //   } else {
  //     console.log("accountKeys not found in the object");
  //   }
  // } else {
  //   console.log("fetch_tx is null or undefined");
  // }




// if (fetch_tx?.meta) {
//   const postTokenBalances = fetch_tx.meta.postTokenBalances;
//   const preTokenBalances = fetch_tx.meta.preTokenBalances;

//   console.log("postTokenBalances:", postTokenBalances);
//   console.log("preTokenBalances:", preTokenBalances);
// } else {
//   console.log("meta not found in the object");
// }

// })();





// const fetch_tx = { /* The object you provided */ };



// '3rBPExPFPyfj1xt6SmnDvLnV1SAd8tG7oFSuTAaGyiGX1G6SqHfwBrRRSMkk1aHjRjQvBpCpofqjf7mhkMp14TTg',
// '6s2gAhFQceaHWnpuj2d1FKzTDpbwdefmp2hKdzs1qAaPuLUJqc9urAjAxQrXLYCuGa7w4bHnybP22kphSp9XoHe'