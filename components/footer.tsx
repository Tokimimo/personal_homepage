import { Box } from '@chakra-ui/react'
import Layout from "./layouts/article";

const Footer = () => {
  return (
    <Layout>
      <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nico Madry. All Rights Reserved.
    </Box>
    <Box align="center" opacity={0.4} fontSize="sm">
        This website is built based on <a href='https://www.craftz.dog/' target='_blank' rel='noreferrer'>Takuya Matsuyama&apos;s website</a>
    </Box>
    </Layout>
  )
}

export default Footer
