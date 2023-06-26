import { initializeKeypair } from "./initialize"
import { Connection,clusterApiUrl, PublicKey, Signer, Keypair, LAMPORTS_PER_SOL, } from "@solana/web3.js"
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  NftWithToken,
  BigNumber,
} from "@metaplex-foundation/js"
import * as fs from "fs"
import * as web3 from "@solana/web3.js";
import { getAssociatedTokenAddress, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";


const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
const owner = await initializeKeypair(connection);
const pubkeey = owner.publicKey;
console.log("pubkey", pubkeey);

// const owner = new PublicKey('2XkU5YXArf9Rkf6jnYtenNhxbTcR2Lb6x4vQXS6MASmRiUphvJD2Q6mDnkMbHEKFz6n9qeUEo4G6cFdKmCvegmWD')

// console.log('owner publickey:' , owner.publicKey.toBase58());


// let secretKey = .from([
//   202, 171, 192, 129, 150, 189, 204, 241, 142, 71, 205, 2, 81, 97, 2, 176, 48,
//   81, 45, 1, 96, 138, 220, 132, 231, 131, 120, 77, 66, 40, 97, 172, 91, 245, 84,
//   221, 157, 190, 9, 145, 176, 130, 25, 43, 72, 107, 190, 229, 75, 88, 191, 136,
//   7, 167, 109, 91, 170, 164, 186, 15, 142, 36, 12, 23,
// ]);





const metaplex = Metaplex.make(connection).use(keypairIdentity(owner)).use(bundlrStorage({
  address: "https://devnet.bundlr.network",
  providerUrl: "https://api.devnet.solana.com",
  timeout: 10000,
}))



// async function uploadImages() {
//   const imageFolder = './landpass';
//   const files = fs.readdirSync(imageFolder);

//   for (const file of files) {
//     if (file.endsWith('.png')) {
//       const buffer = fs.readFileSync(`${imageFolder}/${file}`);
//       const metaplexFile = toMetaplexFile(buffer, file);
//       const imageUri = await metaplex.storage().upload(metaplexFile);
//       console.log(`Image URL for ${file}:`, imageUri);
//     }
//   }
// }

// uploadImages();


// async function uploadMetadata() {
//   const file1 = fs.readFileSync('collection.json');
//   const metadata = JSON.parse(file1.toString());

//   // Read from file1
//   for (let i = 0; i < metadata.length; i++) {
//     const { uri } = await metaplex.nfts().uploadMetadata({
//       name: metadata[i].name,
//       description: "My Collection's description",
//       image: metadata[i].image,
//       seller_fee_basis_points: 500
//     });
//     const nftName = metadata[i].name; // Store the name separately
//     console.log(`Metadata URI for ${nftName}:`, uri);
//   }
// }

// uploadMetadata();




// const rawData = fs.readFileSync('10nft.json');
// // // console.log("rawdata before parse", rawData);
// const metadata = JSON.parse(rawData.toString());
// console.log("data after parse", metadata);


const nft_address = new PublicKey("Fqu2qZxREt26zx7woF138DNjb71RcVLEK9H8j1e11f9");
const NFT = await metaplex.nfts().findByMint({mintAddress:nft_address});
const  mint  = NFT.mint.address;
const payer = new web3.PublicKey("4EUutrmgFQnUGc6i4QJkeDN7Zbvnd1oBXmVcEGrD9Q85");

// console.log("address" , NFT.address.toBase58());
// // // // // // // console.log("COLLECTION" , NFT.collection?.address.toBase58());
// console.log("METADATA" , NFT.metadataAddress.toBase58());
// // // // // // console.log("address" , NFT.editionNonce);
// // // // // // // console.log("Toeken address" , );


const tokenAddress = await getAssociatedTokenAddress(mint, payer);
console.log("Token address" , tokenAddress);



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
// const nft_address = new PublicKey("3VLfZuWLktVPHoHocutVtr5vw8qkc8Lz1d1cUC4ZkKXQ");
// const NFT = await metaplex.nfts().findByMint({mintAddress:nft_address});

// await metaplex.nfts().update(
//   {
//     uri: "https://content.honey.land/assets/legends/awards/worldcup.json",
//     nftOrSft: NFT,
//     // newUpdateAuthority: new PublicKey("Av636SfEEBBmrn5UYMH67TLQredoBMoCxnPyJzc6xdSd"),
//     // collection: new PublicKey("FWeLsxpT5gn9HRjPpNh73qJ8RFnH47d3rVss9vb35BUA"),
//     // authority: owner,

//   }
// );
// // console.log(
  // `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
// console.log("NFT COLLECTION WAS UPDATED");


//=======================================================================================================================================





// creating collection nft 
// const { nft } = await metaplex.nfts().create(
//   {
//     uri: "https://arweave.net/DKEzC2Lpcqhub_2klWIxsUpIIRcTdx4IQy3bTmZ9uc0",
//     name: "#LP_COLL",
//     sellerFeeBasisPoints: 500,
//     symbol: "LP_CL",
//     isCollection: true,
//     collectionIsSized: true,
//   },
// );
// console.log(
//   `collection Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);

// const collectionNft = nft.mint.address;







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




// verifycollection
// await metaplex.nfts().verifyCollection(
//   {
//     mintAddress: new PublicKey("37KpehJKubaxq9GNBA62Czdmu84w9VNQ9c3Rx8UKLzLp"),
//     collectionMintAddress: new PublicKey("FWeLsxpT5gn9HRjPpNh73qJ8RFnH47d3rVss9vb35BUA"),
//     isSizedCollection: true,
//   }
// )
// console.log("NFT COLLECTION VERIFIED");













// creating new nft with metadata
// try {
//   for (let i = 0; i < metadata.length; i++ ) {
//     const {nft} = await metaplex.nfts().create(
//       {
//         uri: metadata[i].uri, // metadata URI(off-chain)
//         name: metadata[i].name,
//         symbol: metadata[i].symbol,
//         // sellerFeeBasisPoints: metadata[i]['json']['seller_fee_basis_points']
//         sellerFeeBasisPoints: 500, 
//         // tokenStandard: metadata[i].tokenStandard,
//         isMutable: true,
//         // primarySaleHappened: metadata[i].primarySaleHappened,
//         // maxSupply: metadata[i]['edition']['maxSupply'],
//         // collection: new PublicKey("8yM5iaHshC7TLYqtB6jeoJoaiCeUToEQttTnFaqn7hLU"),
//         mintTokens: true,
//       }
//     );
//     // await metaplex.nfts().verifyCollection(
//     //   {
//     //     mintAddress: nft.mint.address,
//     //     collectionMintAddress: new PublicKey("8yM5iaHshC7TLYqtB6jeoJoaiCeUToEQttTnFaqn7hLU"),
//     //     isSizedCollection: true,
//     //   }
//     // );  
//     const nftName = metadata[i].name; // Store the name separately
//     console.log(`NFT MINT FOR ${nftName}===>`);
//     console.log(
//       `https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
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