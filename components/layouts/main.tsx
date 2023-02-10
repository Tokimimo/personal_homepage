import Head from 'next/head'
import NavBar from '../navbar'
import {Box, Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Nico's homepage"/>
                <meta name="author" content="Nico Madry"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <meta name="twitter:title" content="Nico Madry"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="og:site_name" content="Nico Madry"/>
                <meta name="og:title" content="Nico Madry"/>
                <meta property="og:type" content="website"/>
                <title>Nico Madry - Homepage</title>
            </Head>

            <NavBar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}

                <Footer/>
            </Container>
        </Box>
    )
}

export default Main
