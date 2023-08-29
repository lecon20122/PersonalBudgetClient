'use client'
import PlanCard from "@/components/plan-card"
import PlanSkeleton from "@/components/skeletons/plan-skeleton"
import { usePlansQuery } from "@/framework/rest-api/plans/get-plans"
import { Button, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import CreatePlanModal from "./create-modal"


export default function Plan() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data } = usePlansQuery()
    if (!data) return <PlanSkeleton times={10} />
    return (

        <div className="p-4">
            <div>
                <Button as={'a'}
                    onClick={onOpen}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'green.500'}
                    href={'#'}
                    _hover={{
                        bg: 'green.300',
                    }}>Create New Plan</Button>
            </div>
            <CreatePlanModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            <main role="main" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                {data?.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                ))}
            </main>
        </div>
    )
}
