import { initializeKeypair } from "./initialize"
import { Connection,clusterApiUrl, PublicKey, Signer, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  NftWithToken,
  BigNumber,
} from "@metaplex-foundation/js"
import * as fs from "fs"


const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');


const owner = await initializeKeypair(connection);
console.log('owner publickey:' , owner.publicKey.toBase58());



const metaplex = Metaplex.make(connection).use(keypairIdentity(owner,)).use(bundlrStorage({
  address: "https://devnet.bundlr.network",
  providerUrl: "https://api.devnet.solana.com",
  timeout: 6000,
}))


const rawData = fs.readFileSync('5hnft.json');
const metadata = JSON.parse(rawData.toString());


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




// updating existing nft
// const nft_address = new PublicKey("37KpehJKubaxq9GNBA62Czdmu84w9VNQ9c3Rx8UKLzLp");
// const NFT = await metaplex.nfts().findByMint({mintAddress:nft_address});

// await metaplex.nfts().update(
//   {
//     uri: "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets_gold_pass/121.json",
//     nftOrSft: NFT,
//     newUpdateAuthority: new PublicKey("Av636SfEEBBmrn5UYMH67TLQredoBMoCxnPyJzc6xdSd"),
//     // collection: new PublicKey("FWeLsxpT5gn9HRjPpNh73qJ8RFnH47d3rVss9vb35BUA"),
//     // authority: owner,

//   }
// );
// console.log(
//   `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
// console.log("NFT COLLECTION WAS UPDATED");








// creating collection nft 
// const { nft } = await metaplex.nfts().create(
//   {
//     uri: "https://content.honey.land/assets/collections/honeyland_passes.json",
//     name: "Honeyland Passes",
//     sellerFeeBasisPoints: 500,
//     symbol: "HL_PASS",
//     isCollection: true,
//     collectionIsSized: true,
//   },
// );
// console.log(
//   `collection Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
// console.log(`${nft.mint.address}`);
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





// await metaplex.nfts().verifyCollection(
//   {
//     mintAddress: new PublicKey("37KpehJKubaxq9GNBA62Czdmu84w9VNQ9c3Rx8UKLzLp"),
//     collectionMintAddress: new PublicKey("FWeLsxpT5gn9HRjPpNh73qJ8RFnH47d3rVss9vb35BUA"),
//     isSizedCollection: true,
//   }
// )
// console.log("NFT COLLECTION VERIFIED");













// creating new nft with metadata
for (let i = 0; i < metadata.length; i++ ) {
  const {nft} = await metaplex.nfts().create(
    {
      uri: metadata[i].uri, // metadata URI(off-chain)
      name: metadata[i].name,
      symbol: metadata[i].symbol,
      // sellerFeeBasisPoints: metadata[i]['json']['seller_fee_basis_points']
      sellerFeeBasisPoints: 500, 
      tokenStandard: metadata[i].tokenStandard,
      isMutable: metadata[i].isMutable,
      primarySaleHappened: metadata[i].primarySaleHappened,
      maxSupply: metadata[i]['edition']['maxSupply'],
      collection: new PublicKey("5gCu1LdgCmwMjdNHfhGnWV3smrwNJGK85dT5EHN3djtd"),
      mintTokens: true,
    }
  );
  await metaplex.nfts().verifyCollection(
    {
      mintAddress: nft.mint.address,
      collectionMintAddress: new PublicKey("5gCu1LdgCmwMjdNHfhGnWV3smrwNJGK85dT5EHN3djtd"),
      isSizedCollection: true,
    }
  );  
  console.log(
    `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);
  // console.log(`nft mint address: ${nft.mint.address}`)
}








