'use client'

import BuyToken from "./tokenComponents/BuyToken"
import SellToken from "./tokenComponents/SellToken"
import { Flex, Spacer } from "@chakra-ui/react"
import Balance from "./tokenComponents/Balance"
import { useEthers } from "@usedapp/core"
import NexToken from './tokenComponents/NexToken.json'
import { Contract } from "ethers"

const tokenAddress = '0x0E6F513B2DfE36A3d922Db804f3568669679d911'

export default function Token() {
    const contract = new Contract(tokenAddress, NexToken.abi)
    const { account } = useEthers()
    return (
        <main className="">
            <Balance contract={contract} account={account}/>
            <Flex gap={52} justify='center'>
                <BuyToken/>
                <SellToken/>
            </Flex>
        </main>
    )
}