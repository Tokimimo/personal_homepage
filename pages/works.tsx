import {Box, Container, Heading, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import {getWorkList} from './workList'

import { Work } from '../components/model/models'

function Works({ works }){
  const projects : Work[] = [];

  works.map((work) => {
    const test = Work.fromSerialized(work.toString());
    projects.push(test);
  })

  return (
    <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {projects.map((work) => 
        (
          <Section>
            <WorkGridItem id={work.id} title={work.title} thumbnail={work.thumbnail}>
               {work.description}
            </WorkGridItem>
          </Section>
        ))}
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

      <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{backdropFilter: 'blur(10px)'}}
      >
       Currently under construction. Please come back later
      </Box>
  
    </Container>
  </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const works = getWorkList();

  return {
    props: {
      works,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  }
} 

export default Works
