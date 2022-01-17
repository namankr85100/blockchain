const fs = require('fs')
const hre = require("hardhat");

const main = async () => {
    try {



    // console.log(Object.keys(hre.ethers))
        
    // We get the contract to deploy
    const svgNft = await hre.ethers.getContractFactory("SVGNFT");
    const svgDeployed = await svgNft.deploy();
    console.log(`You have deployed an NFT contract to ${svgDeployed.address}`)
        
    const accounts = await hre.ethers.getSigners()
    console.log("----------------------------------------------------")
    const signer = accounts[0]
    // const svgContract = new ethers.Contract(svgDeployed.address, svgNFTContract.interface, signer)
    
    // // console.log("Let's create an NFT now!")
    // let filepath = "./img/small_enough.svg"
    // let svg = fs.readFileSync(filepath, { encoding: "utf8" })
    // console.log(`We will use ${filepath} as our SVG, and this will turn into a tokenURI. `)
    // tx = await svgDeployed.create(svg)
    // await tx.wait(1)
    // console.log(`You've made your first NFT!`)
    // console.log(`You can view the tokenURI here ${await svgDeployed.tokenURI(0)}`)
} catch(e) {
    console.error(e)
}
};

// module.exports.tags = ['all', 'svg']
main();