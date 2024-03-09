import BuyToken from "./tokenComponents/BuyToken"
import SellToken from "./tokenComponents/SellToken"
import { Flex, Spacer } from "@chakra-ui/react"
import Balance from "./tokenComponents/Balance"
import { useEthers } from "@usedapp/core"
// import NexToken from "../"

export default function Token() {
    return (
        <main className="">
            <Balance />
            <Flex gap={52} justify='center'>
                <BuyToken/>
                <SellToken/>
            </Flex>
        </main>
    )
}