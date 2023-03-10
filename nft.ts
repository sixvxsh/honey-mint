import { initializeKeypair } from "./initialize"
// import  * as originalmeta  from "./twonft.json"
import { Connection, clusterApiUrl, PublicKey, Signer, Keypair } from "@solana/web3.js"
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  NftWithToken,
  BigNumber,
} from "@metaplex-foundation/js"
import * as fs from "fs"



const rawData = fs.readFileSync('twonft.json');
// const metadata = JSON.parse(rawData.toString());



console.log('metadata before parsing:\n', rawData.toString())
const metadata = JSON.parse(rawData.toString());
console.log('metadata after parsing:\n', metadata)




interface NftData {
    name: string
    symbol: string
    description: string
    sellerFeeBasisPoints: number
    uri: string 
    tokenStandard: number
    isMutable: boolean
    primarySaleHappened: boolean
    maxSupply: BigNumber 
    isCollection: boolean
    collection: PublicKey
    collectionAuthority: Signer
    collectionIsSized: boolean
}
  
interface CollectionNftData {
    name: string
    symbol: string
    description: string
    sellerFeeBasisPoints: number
    isCollection: boolean
    collectionAuthority: Signer
  }
  


const nftData = {
    name: metadata.name,
    symbol: metadata.symbol,
    description: metadata.description,
    sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
    uri: metadata.uri,
    tokenStandard: metadata.tokenStandard,
    isMutable: metadata.isMutable,
    primarySaleHappened: metadata.primarySaleHappened,
    maxSupply: metadata.maxSupply,
    isCollection: metadata.isCollection,
    collection: metadata.collection,
    mintTokens: true,
    collectionAuthority: Keypair.generate(),
    collectionIsSized: metadata.collectionIsSized,
  }



async function createNft(
    metaplex: Metaplex,
    uri: string,
    nftData: NftData,
    collectionMint: PublicKey
  ): Promise<NftWithToken> {
    const { nft } = await metaplex.nfts().create(
      {
        uri: nftData.uri, // metadata URI(off-chain)
        name: nftData.name,
        sellerFeeBasisPoints: nftData.sellerFeeBasisPoints,
        symbol: nftData.symbol,
        collection: collectionMint,
      },
      { commitment: "finalized" }
    )
  
    console.log(
      `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`
    )
  
    await metaplex.nfts().verifyCollection({
      //this is what verifies our collection as a Certified Collection
      mintAddress: nft.mint.address,
      collectionMintAddress: collectionMint, 
      isSizedCollection: true,
    })
  
    return nft
}


async function createCollectionNft(
    metaplex: Metaplex,
    uri: string,
    data: CollectionNftData
  ): Promise<NftWithToken> {
    const { nft } = await metaplex.nfts().create(
      {
        uri: "https://content.honey.land/assets/collections/honeyland_passes.json",
        name: data.name,
        sellerFeeBasisPoints: data.sellerFeeBasisPoints,
        symbol: data.symbol,
        isCollection: true,
      },
      { commitment: "finalized" }
    )
  
    console.log(
      `Collection Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`
    )
  
    return nft
}


async function main() {
    // create a new connection to the cluster's API
    const connection = new Connection(clusterApiUrl("devnet"))
  
    // initialize a keypair for the user
    const user = await initializeKeypair(connection)
  
    console.log("PublicKey:", user.publicKey.toBase58())
  
    // metaplex set up
    const metaplex = Metaplex.make(connection)
      .use(keypairIdentity(user))
      .use(
        bundlrStorage({
          address: "https://devnet.bundlr.network",
          providerUrl: "https://api.devnet.solana.com",
          timeout: 60000,
        })
      )
  
    const collectionNftData = {
      name: "Honeyland Passes",
      symbol: "HL_PASS",
      description: "Gold, Rose Gold, Platinum, & Diamond Passes are the highest honor in the Swarm and are reserved for diamond-handed legends. Holders will get in-game and IRL rewards.",
      sellerFeeBasisPoints: 500,
      imageFile: "honeyland_passes.png",
      isCollection: true,
      collectionAuthority: user,
    }
  
    // upload data for the collection NFT and get the URI for the metadata
    const collectionUri = "https://content.honey.land/assets/collections/honeyland_passes.json"
  
    // create a collection NFT using the helper function and the URI from the metadata
    const collectionNft = await createCollectionNft(
      metaplex,
      collectionUri,
      collectionNftData
    )
  
    const nfturi = metadata.uri;
  
    // create an NFT using the helper function and the URI from the metadata
    for(let i = 0; i < metadata.length; i++) {
      const nft = await createNft(
        metaplex,
        metadata.uri,
        nftData,
        collectionNft.mint.address
      )
    }
};


main()
  .then(() => {
    console.log("Finished successfully")
    process.exit(0)
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })