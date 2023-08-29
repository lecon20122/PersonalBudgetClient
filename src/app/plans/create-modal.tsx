import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export default function CreatePlanModal({ isOpen, onClose, onOpen }: Props) {
    const initialRef = React.useRef(null)
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [totalPlanned, setTotalPlanned] = React.useState(0)
    const [createdAt, setCreatedAt] = React.useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name, description, totalPlanned, createdAt)

    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>

                            <FormControl>
                                <FormLabel>Plan Name</FormLabel>
                                <Input onChange={(e) => setName(e.target.value)} name="name" ref={initialRef} placeholder='example : summer vacation' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Input onChange={(e) => setDescription(e.target.value)} name="Description" placeholder='Description' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Planned</FormLabel>
                                <Input onChange={(e) => setTotalPlanned(parseInt(e.target.value))} type="number" name="TotalPlanned" placeholder='how much do you plan to spent on your vacation' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Month</FormLabel>
                                <Input onChange={(e) => setCreatedAt(e.target.value)} type="month" name="CreatedAt" placeholder='how much do you plan to spent on your vacation' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                type="submit"
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'green'}
                                bg={'green.500'}
                                _hover={{
                                    bg: 'green.300',
                                }} mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </div>
    )
}
