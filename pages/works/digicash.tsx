import {
    Container,
    Badge,
    List,
    ListItem,
    UnorderedList,
    Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {Title, Meta} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="banking">
        <Container>
            <Title>
                Digicash
                <Badge>2012-2023</Badge>
            </Title>
            <Center my={6}>
            </Center>
            <P>
                Contributed through maintaining and developing the project Digicash.
            </P>
            <br/>
            <P>
                Feature list:
            </P>
            <UnorderedList ml={8} my={4}>
                <ListItem>Manage users</ListItem>
                <UnorderedList ml={4} my={1}>
                    <ListItem>Create</ListItem>
                    <ListItem>Update</ListItem>
                    <ListItem>Delete</ListItem>
                </UnorderedList>
                <ListItem>Manage bank accounts</ListItem>
                <UnorderedList ml={4} my={1}>
                    <ListItem>Add user to account</ListItem>
                    <ListItem>Remove user from account</ListItem>
                    <ListItem>List users of account</ListItem>
                    <ListItem>List accounts of user</ListItem>
                </UnorderedList>
                <ListItem>Manage funds</ListItem>
                <UnorderedList ml={4} my={1}>
                    <ListItem>Deposit money</ListItem>
                    <ListItem>Withdraw money</ListItem>
                </UnorderedList>
                <ListItem>Perform transactions</ListItem>
            </UnorderedList>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS & Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Contributed through</Meta>
                    <span>2019-2023</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work
