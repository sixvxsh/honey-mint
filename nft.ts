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





// const connection = new Connection(clusterApiUrl("devnet"));
// const owner = await initializeKeypair(connection);
// const pubkeey = owner.publicKey;
// console.log("pubkey", pubkeey);



const rpcUrl = "https://frosty-floral-wind.solana-devnet.quiknode.pro/fa3c7dec03be0b5335ff2905b342eedf94ada834/";
const connection = new Connection(rpcUrl, 'confirmed');
// const owner = await initializeKeypair(connection);
// const pubkeey = owner.publicKey;
// console.log("pubkey", pubkeey);




const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(madHoneySecret))
  .use(bundlrStorage());





// const metaplex = Metaplex.make(connection).use(keypairIdentity(owner)).use(bundlrStorage({
//   address: "https://devnet.bundlr.network",
//   providerUrl: "https://api.devnet.solana.com",
//   timeout: 10000,
// }))





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




// const file1 = fs.readFileSync('HLticketCollection.json');
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







const rawData = fs.readFileSync('madHoneyMetadata.json');
// // console.log("rawdata before parse", rawData);
const metadata = JSON.parse(rawData.toString());
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
try {
  for (let i = 0; i < metadata.length; i++ ) {
    const {nft} = await metaplex.nfts().create(
      {
        uri: metadata[i].uri, // metadata URI(off-chain)
        name: metadata[i].name,
        symbol: metadata[i].symbol,
        // sellerFeeBasisPoints: metadata[i]['json']['seller_fee_basis_points']
        sellerFeeBasisPoints: 410, 
        // tokenStandard: metadata[i].tokenStandard,
        isMutable: true,
        // primarySaleHappened: metadata[i].primarySaleHappened,
        // maxSupply: metadata[i]['edition']['maxSupply'],
        collection: new PublicKey("CEHgQXEt4FyqgTv92jwGbRZ43C14igodmLQSzhSVvFcf"),
        mintTokens: true,
      }
    );
    await metaplex.nfts().verifyCollection(
      {
        mintAddress: nft.mint.address,
        collectionMintAddress: new PublicKey("CEHgQXEt4FyqgTv92jwGbRZ43C14igodmLQSzhSVvFcf"),
        isSizedCollection: true,
      }
    );  
    const nftName = metadata[i].name; // Store the name separately

    console.log(`NFT MINT FOR ${nftName}===> ${nft.address.toString()}`);
    // console.log(
    //   `NFT COLLECTION: https://explorer.solana.com/address/${nft.collection.toString()}?cluster=devnet`
    // );
    // console.log(
    //   `NFT METADATA: https://explorer.solana.com/address/${nft.metadataAddress.toString()}?cluster=devnet`
    // );
    // console.log(`nft mint address: ${nft.mint.address}`)
  };
} catch (error) {
  console.log("ERROR IN MINT");
  console.error(error);
};





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
//     new PublicKey("Eew1ePch3ykJkfHUBx7Aa5MwRqvJoF3yDrYLG3gXLnGh"),
//     new PublicKey("FKWAEqPF3w8qMpTgstmttEqrSd7oeWbArpWjU93MuCrw"),
//     new PublicKey("3xNSUgT5ahAKMVKPHfgUcSz4dmUz7nEQrsTsjDfnXNfA"),
//     new PublicKey("Bty6XJGhiueWU7yZb62AdQ6CksHmxRX19fJPJo5LKq3Z"),
//     new PublicKey("44JGLSk8pEwQ8hhBvMaRRtNKxwDtBMirTrzVBH1dVmez"),
//     new PublicKey("2ju2XQXwsUhz97mV3cVXbpUjZgJ33qBZX4pS5svSxhRe"),
//     new PublicKey("8ZE37tvvCAe2zZsnDnR3WbtYghoJsUKJiktnExFmWFyR"),
//     new PublicKey("A5iHPRkxrusM5jmKv9ZKXdXhkbVuxDAXpEbsXBMSm4gF"),
//     new PublicKey("77mSgJEJhYwDB5iWUxv7NyWkB7nKHBkyaB2dacLkRekD"),
//     new PublicKey("FRs4fze5ukYq3dsSVosh21QfdfYSQphxiZA1to7CGVwr"),
//     new PublicKey("EUddY1Hi72RkZeXEUxu8TrKco1dQXK9iY8rE1VEJ5v92"),
//     new PublicKey("7FGRL37Y28Hn3A1ixJN3sGXsbRp2rxd8Fp3uteJFTp8U"),
//     new PublicKey("7BYUZeAiqJPiFUV1hPFstxBZ9sSgCZ3XM8rR2gnJMQWb"),
//     new PublicKey("Ae5uhrRHCNggFcjubBFawyN2Xxuj3EArAqBpYatKkuSD"),
//     new PublicKey("5GqsKetU53wzNiffHaqo3ZWGowJ6aRkobgLYERjPmbw9"),
//     new PublicKey("BGygVDooG5VaDVTjaSa6LNqe6vjNW3g5JDRcnGkS5svb"),
//     new PublicKey("98dRhk77dYRwjKqqes8KTHKBoVjNYuvvnHFwVCehisgB"),
//     new PublicKey("3T9mV8SKEEDcfZEG9JSoEFtvQLxA2HsP5sWJSQU6ku8x"),
//     new PublicKey("DoUMvEUQRuJBXrFWDodyTrHizWxoTFJtFqbCjJjL7V75"),
//     new PublicKey("BAAYoFH7xgVzjuSZJMdAbSvdhup4KNDQyW4EkMAKmnEh"),
//     new PublicKey("FMpHeFKaG8QDLNpvtN3Z1aT2daE7ecbFujzNYwdA5rZS"),
//     new PublicKey("6orZxFgU18g5P9jxQ1tFqhNncUiEPkXW2kXXXKLHzZKS"),
//     new PublicKey("AHX61heoCtPUfSUPGNXYr1zhfhBXhQ8jfTw8Kw2fgKzj"),
//     new PublicKey("3U5LXr2oCUsv9TrcoWv5bF8p2UdvsX6h87xM8gVRZoMo"),
//     new PublicKey("2XsvhuGxQAkiwukwDmfDvc3iRKSEBUjnCzDk9Sown3Yd"),
//     new PublicKey("BHyXq2J6EVGqH8bzfXRFDn1Gr1Futs2t4zNvTJqeBMfT"),
//     new PublicKey("5u21uFKztepXzpS95YSFCzso8L2eRtXha13e7saQmNWR"),
//     new PublicKey("EJpxLVbbbY9MtuoRohxXSb6cb1qQgFieroyn39ttZ7vs"),
//     new PublicKey("2svfKTAaCVmQ55uFnwsaxr9KFWQgkjqH3KijXrKMyGoE"),
//     new PublicKey("8JcRWVAr1VJi5cBD6oJakPvNTwcbp1ALqgnASCSCquWs"),
//     new PublicKey("BEgr9eGsHHY39wE17cpBmanVD2tyQiY2VhedrVxhQ9WV"),
//     new PublicKey("GzzVZBNczAvxjvcFkNWzyXkUyAmRQuoTC6swoPuBTmPY"),
//     new PublicKey("2FfbqDqKC91etM7QRbb6UiTpsiRrRnvt8Bnqe7DNggPb"),
//     new PublicKey("9MQUz2U5pmodAubERZ4DHwcS3ZPnowteo8DGEP5WzCNZ"),
//     new PublicKey("Aozu9XmdiMafsTZ9mQcttAxuUe9J2cru1X1Jd6mELzz9"),
//     new PublicKey("ubLKb6omH798MbguJBGx1VvskCgAC12pZ6HsvcdrFoQ"),
//     new PublicKey("AuNm7YJM4KJVWDG8fB8rwxoTC2DeYJbV6CfCfSzzVh93"),
//     new PublicKey("CsS3VDUHXHHDGW8o9TiYiYzhQghYbNDW9JdJLnYB3rrr"),
//     new PublicKey("3sexnEy1rts5q5UJiR8RRYr5caDefj2m3ghyRhsqXuTd"),
//     new PublicKey("9FxX2FjtQTTNXfEN11zxZSpN6KLbjYG2czqC61z5Soa2"),
//     new PublicKey("GE9YzPkp32816DqwyrLfVdiUR9v1pRr1puGASoyGDW6W"),
//     new PublicKey("EMq6hYxS6MoPimjtYVekVE8ZCrDRp4J1aD5bRrL2Www1"),
//     new PublicKey("3Rq7astvSmhwWCK5HL9ZuVtyeyWb9hyXG8Q72FnwmLvj"),
//     new PublicKey("DZRTviiYEV9PPmB2yDggWAHE68VtJLweKBgUA9T6n576"),
//     new PublicKey("3Gc4s6kMFJ21vhwDRPjA5LoxP2k6fRW9osAPGQmBjNF2"),
//     new PublicKey("2Qr1z4LAbTG7svW4wA2v5gTzLiTJPwMAbMMihuL5AYhF"),
//     new PublicKey("8MMH1KpUNF5GDvd21QjQfcnoXnbk8M9WgwArydnQWefj"),
//     new PublicKey("AT7XGW9QJhWHZtcPixK2cC2oHMTmzTwmk2ztESiCiUK9"),
//     new PublicKey("3R4g9nRExdUbxUW7WYFBBV1ViNVg3UNsc8bGph1CjZ5V"),
//     new PublicKey("D2mUc6PyRU8m9ttHTdu4cM2TVsh3kuNk2zVPo3hQPpkh"),
//     new PublicKey("4qUY9yvYgeuHr4k2St4AA2qmkZCwbt8cpausn8XTs6HM"),
//   ]


//   console.log("after reading");

// const getNfts = await metaplex.nfts().findAllByMintList({ mints: mintAddress }) as Metadata[];

// console.log(JSON.stringify(getNfts));

//   let fileContent = '';
//   getNfts.forEach((nft) => {
//     fileContent += `Name: ${nft.name}\nMint Address: ${nft.mintAddress.toString()}\n\n`;
//   });

//   fs.writeFileSync('MintAndNameList4.txt', fileContent);

//   console.log('NFT data written to nftData.txt file.');
// } catch (Error) {
//   console.error('Error:', Error);
// }





















// console.log('nftB' , nftB);



// const mintlist = ["7U9CEGcxPihWkZgR7TKGnGUPokvsK5RHaMfB11WCbqui", "3X6VJujDJMr1yfXJdt3M4ZmubGUL2GyNZ7eSvk4wQkWX"]


// const findmintNfts = await metaplex.nfts().findAllByMintList(mintlist);




// // Assuming you have an array of mints called 'mintList'
// const nftList = await metaplex.nfts().findAllByMintList({
//   mints: mintList
// });




