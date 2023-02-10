import {Box, Container, Heading, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBanking from '../public/images/works/banking_stock.jpg'
import thumbDigicash from '../public/images/works/digicash_thumb.png'

const Works = ({works}) => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="banking" title="Banking Showcase" thumbnail={thumbBanking}>
            A showcase project used as application example for Finologee.
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
      
      <Heading as="h3" fontSize={20} mb={4}>
        Work contributions
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="digicash" title="Digicash" thumbnail={thumbDigicash}>
            Mobile payments platform to streamline payments between users and merchants
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

      /*
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {works.map((work) => (
          <Section>
            <WorkGridItem id="work.id" title="work.title" thumbnail={work.thumbnail}>
               work.description
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>
      */

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
/*
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://nicomadry.de/works')
  const works = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      works,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
} 
*/

export default Works
export { getServerSideProps } from '../components/chakra'
