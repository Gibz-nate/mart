import React from 'react'
import {Box, Text } from '@chakra-ui/react'


const NotFound = () => {
  return (
    <Box bg='tomato' w='80%' p={100} color='white' textAlign={'center'} margin={'auto'} rounded={'xl'} marginTop={40}>
      <h1>404 - Not Found</h1>
      
      <Text  fontSize='5xl' >
        ⚠️
        !opps
      </Text>
      <p>The page you're looking for doesn't exist.</p>
    </Box>
  )
}

export default NotFound