import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import {IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoStackoverflow} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{backdropFilter: 'blur(10px)'}}
            >
                Hello, I&apos;m an software engineer based in Germany!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nico Madry
                    </Heading>
                    <p>Software Engineer ( Java / Spring boot )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/nico.jpeg"
                            alt="Profile image"
                            borderRadius="full"
                            width="110"
                            height="110"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am an enthusiastic software engineer based in Germany with a passion
                    for building fast and modern microservice applications. Designing software
                    architecture tailored to the needs of the application, with clean code
                    and maintainability in mind are some of my favorite tasks.
                </Paragraph>
                <Heading as="h3" variant="section-title">
                    How I got into programming
                </Heading>
                <Paragraph>
                    Video games introduced me into the world of programming, because I was so curious
                    about the inner working of those. Curiously I started researching how they work and
                    what programming languages are. My first own steps in programming started with Visual Basic 6 .NET.
                    After writing basic example programs such as a simple calculator through an introduction book,
                    the journey continued with bash scripts and C#.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon/>}
                        colorScheme="teal"
                    >
                        My portfolio
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1996</BioYear>
                    Born in Trier, Germany.
                </BioSection>
                <BioSection>
                    <BioYear>2013</BioYear>
                    Finished my high school ( German: Realschule ) scholarship with a GPA of 2.1
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed my apprenticeship in software development at the ZIMK
                    branch of the University Trier.
                </BioSection>
                <BioSection>
                    <BioYear>2016 to 2019</BioYear>
                    Worked at Felten GmbH. <br/>
                    MES and SAP focused product development.
                </BioSection>
                <BioSection>
                    <BioYear>2019 to present</BioYear>
                    Working at Finologee. <br/>
                    Finance sector specialized product development.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Art, Music, Video games, My cats, Horse riding, Climbing
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/Tokimimo" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub/>}
                            >
                                @Tokimimo
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/Tokimimo1" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter/>}
                            >
                                @Tokimimo1
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/nico-madry/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin/>}
                            >
                                @Nico Madry
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://stackoverflow.com/users/4998135/nico" target="_blank">
                            <Button variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoStackoverflow/>}>
                                @Nico
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/posts"
                        scroll={false}
                        rightIcon={<ChevronRightIcon/>}
                        colorScheme="teal"
                    >
                        My posts
                    </Button>
                </Box>
            </Section>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
