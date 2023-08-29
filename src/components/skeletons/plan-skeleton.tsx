import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function PlanSkeleton({ times = 4 }: { times: number }) {
    return (
        <div className='p-4 h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4'>
            {[...Array(times)].map((_, i) => (
                <Box p='6' boxShadow='lg' bg='white' key={i}>
                    <Skeleton height={'100'} width={'100'} />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                </Box>
            ))}
        </div>
    )
}
