import { Flex, Spacer } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { Box, Button, ButtonGroup } from '@chakra-ui/react'

const BuyToken = () => {

  return (
    <Flex justifyContent='center' alignItems='center'>
      {/* Gradient Option 2 (stronger LTR) */}
      <Box
        bg="linear-gradient(to left, #c23616, #ff4040)" 
        p={6}
        borderRadius="xl" 
        w={500}
        color="white"
        className="text-lg"
        boxShadow="none" 
      >
        <form>
          <FormControl>
            <FormLabel fontSize="2xl" className="text-center">
              Enter amount of tokens to Buy
            </FormLabel>
            <Spacer mt={4} />
            <NumberInput min={0} size="lg">
              <NumberInputField
                placeholder="0 NEX"
                className="text-left pl-2 text-lg focus:ring-pink-500 focus:ring-opacity-50 bg-gray-800 rounded-md" 
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Spacer mt={4} />
            <Flex justifyContent='center'>
              <Button
                type="submit"
                colorScheme="transparent" 
                size="lg"
                mt={4}
                className="rounded-full border border-white px-8 py-3 text-white text-shadow-md font-medium hover:bg-white hover:text-pink-500" 
              >
                Buy Tokens
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Flex>
  )
}

export default BuyToken
