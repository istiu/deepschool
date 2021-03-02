import NextLink from 'next/link'

import { Flex, Box, Badge, Heading, Text, Button } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { courseProps } from 'types/courses'

type Props = {
  course: courseProps
}

export default function Card({ course }: Props) {
  return (
    <Box
      bgColor="white"
      borderWidth="1px"
      borderRadius="md"
      p="6"
      alignItems="center"
    >
      <Heading as="h2" size="md" mb="2">
        {course.title}
      </Heading>
      <Badge colorScheme="purple" mb="2">
        {course.category.name}
      </Badge>
      <Text color="gray.500" mb="2">
        {course.description}
      </Text>
      <Flex justifyContent="flex-end">
        <Button
          colorScheme="purple"
          variant="solid"
          as="span"
          rightIcon={<MdKeyboardArrowRight />}
        >
          <NextLink href="/courses/[slug]" as={`/courses/${course.slug}`}>
            Ver aulas
          </NextLink>
        </Button>
      </Flex>
    </Box>
  )
}
