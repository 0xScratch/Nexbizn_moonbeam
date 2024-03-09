// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider, MoonbaseAlpha } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const config = {
  readOnlyChainId: MoonbaseAlpha.chainId,
  readOnlyUrls: {
    [MoonbaseAlpha.chainId]: getDefaultProvider(
      'https://rpc.api.moonbase.moonbeam.network'
    ),
  },
};

export function Providers({ children }) {
  return (
  <DAppProvider config={config}>
    <ChakraProvider>
      {children}
    </ChakraProvider>
  </DAppProvider>
  )
}