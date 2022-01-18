const fs = require('fs')
const hre = require("hardhat");

const main = async () => {
    try {



        
    // We get the contract to deploy
    const svgNft = await hre.ethers.getContractFactory("SVGNFT");
    const svgDeployed = await svgNft.deploy();
    console.log(`You have deployed an NFT contract to ${svgDeployed.address}`)
        
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const svgContract = new hre.ethers.Contract(svgDeployed.address, svgNft.interface, signer)
    console.log("----------------------------------------------------")
    
    console.log("Let's create an NFT now with the svg!")
    const filepath = "./img/small_enough.svg"
    const svg = fs.readFileSync(filepath, { encoding: "utf8" })
    console.log(`We will use ${filepath} as our SVG, and this will turn into a tokenURI. `)
    tx = await svgDeployed.create(svg)
    await tx.wait(1)
    console.log(`You've made your first NFT!`)
    console.log(`You can view the tokenURI here ${await svgContract.tokenURI(0)}`)
} catch(e) {
    console.error(e)
}
};

// module.exports.tags = ['all', 'svg']
main();