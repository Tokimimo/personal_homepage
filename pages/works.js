import {Box, Container, Heading, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBanking from '../public/images/works/banking_stock.jpg'
import thumbDigicash from '../public/images/works/digicash_thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="banking" title="Banking Showcase" thumbnail={thumbBanking}>
            A showcase project used as application example for Finologee.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="digicash" title="Digicash" thumbnail={thumbDigicash}>
            A
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{backdropFilter: 'blur(10px)'}}
      >
       There are no more public or free-time projects but hopefully there will be more in the future!
      </Box>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
