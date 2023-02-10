import { Box, Center, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container>
      <Center>
        <Box opacity={0.4} fontSize="sm">
          &copy; {new Date().getFullYear()} Nico Madry. All Rights Reserved.
        </Box>
        <Box opacity={0.4} fontSize="sm">
          This website is built based on <a href='https://www.craftz.dog/' target='_blank' rel='noreferrer'>Takuya Matsuyama&apos;s website</a>
        </Box>
      </Center>
    </Container>
  )
}

export default Footer
