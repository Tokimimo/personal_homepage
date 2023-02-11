import {forwardRef} from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue, Spacer
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {IoLogoGithub} from 'react-icons/io5'
import {right} from "@popperjs/core";

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{backdropFilter: 'blur(10px)'}}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/works" path={path} target="_self">
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path} target="_self">
                        Posts
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/Tokimimo/personal_homepage"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{gap: 4}}
                        pl={2}
                    >
                        <IoLogoGithub/>
                        Source
                    </LinkItem>
                </Stack>

                <Flex ml={10} alignContent="right" alignItems='right'>
                    <Box flex={1} alignSelf="right" alignContent="right" alignItems="right">
                        <ThemeToggleButton/>

                        <Box alignItems="right" ml={2} display={{base: 'inline-block', md: 'none'}}>
                            <Menu isLazy id="navbar-menu">
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon/>}
                                    variant="outline"
                                    aria-label="Options"
                                />
                                <MenuList>
                                    <MenuItem as={Link} href="/">
                                        About
                                    </MenuItem>
                                    <MenuItem as={Link} href="/works">
                                        Works
                                    </MenuItem>
                                    <MenuItem as={Link} href="/posts">
                                        Posts
                                    </MenuItem>
                                    <MenuItem
                                        as={Link}
                                        href="https://github.com/Tokimimo/personal_homepage"
                                    >
                                        View Source
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar
