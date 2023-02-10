import {Box, Container, Heading, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Posts
            </Heading>

            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{backdropFilter: 'blur(10px)'}}
            >
                There currently are no posts but come back later once I have found ideas
            </Box>
        </Container>
    </Layout>
)

export default Posts
