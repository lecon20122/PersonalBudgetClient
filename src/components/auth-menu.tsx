'use client';
import {
    Stack,
    Button,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    Center,
    MenuItem,
    MenuDivider
} from '@chakra-ui/react';
import { signIn, useSession, signOut } from 'next-auth/react';
import React from 'react'

export default function AuthMenu() {


    const { data } = useSession()

    if (data?.user) {
        return (
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                </MenuButton>
                <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                        <Avatar
                            size={'2xl'}
                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                    </Center>
                    <br />
                    <Center>
                        <p>{data?.user.name}</p>
                    </Center>
                    <Center><small className='text-gray-400'>{data?.user.email}</small></Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={(e) => signOut()}>Logout</MenuItem>
                </MenuList>
            </Menu>
        )
    } else {
        return (
            <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button onClick={(e) => signIn("credentials")} as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                    Sign In
                </Button>
                <Button
                    as={'a'}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'green.500'}
                    href={'#'}
                    _hover={{
                        bg: 'green.300',
                    }}>
                    Sign Up
                </Button>
            </Stack>
        )
    }

}
