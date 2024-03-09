'use client'

import React from 'react';
import { Image } from '@chakra-ui/next-js';
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Flex direction={'row'}>
            <Flex className="logo" justify='center' marginRight='81'>
                <Image 
                    src="/logo.png" 
                    alt="NexBizn"
                    width={130}
                    height={70} 
                />
            </Flex>
            <Flex className="tab" justify='center' marginTop='13'>
                <Tabs position="relative" variant="unstyled">
                    <TabList gap='14' className='text-purple-300 font-bold' fontFamily='cursive'>
                        <Tab>Home</Tab>
                        <Tab>Tokens</Tab>
                        <Tab>Register</Tab>
                        <Tab>Auction</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-5px"
                        height="1.5px"
                        bg="pink.800"
                        borderRadius="2px"
                    />
                    <TabPanels>
                        {/* 1st tab panel */}
                        <TabPanel>
                        </TabPanel>
                        {/* 2nd tab panel */}
                        <TabPanel>
                        </TabPanel>
                        {/* 3rd tab panel */}
                        <TabPanel>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Spacer />
            <Flex margin={4}>
                <Button colorScheme='red' variant='outline'>
                    Connect Wallet 🔗
                </Button>
            </Flex>
        </Flex>
    );
};

export default Navbar;