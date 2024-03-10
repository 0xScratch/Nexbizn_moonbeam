const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NexBizn", (m) => {
    const nexToken = m.contract("NexToken");
    const nexNFT = m.contract("NexNFT");
    const auction = m.contract("Auction", [nexToken, nexNFT]);

    return { nexToken, nexNFT, auction };
})

```
NexBizn#NexNFT - 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
NexBizn#NexToken - 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
NexBizn#Auction - 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
```