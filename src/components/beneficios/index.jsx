import React from "react"
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/layout"
import { StarIcon } from "@chakra-ui/icons"

export default function Beneficios() {
  return (
    <Box as="section" margin="0 auto" textAlign="center" padding="15px">
      <Heading mt="10" mb="10">
        {" "}
        O que você vai aprender?{" "}
      </Heading>

      <SimpleGrid spacing="40px" columns={3} minChildWidth="250px">
        <Box
          bg="rgb(58,161,105)"
          height="auto"
          padding="20px"
          borderRadius="10px"
        >
          <Heading as="h2">
            {" "}
            <StarIcon w={8} h={8} color="gold" margin="1" /> Conteúdo 1{" "}
          </Heading>
          <b>
            Você receberá desafios diários, que te ajudarão a se manter focada e
            motivada a realizar mudanças no seu dia a dia.
          </b>
        </Box>

        <Box
          bg="rgb(58,161,105)"
          height="auto"
          padding="20px"
          borderRadius="10px"
        >
          <Heading as="h2">
            {" "}
            <StarIcon w={8} h={8} color="gold" margin="1" /> Conteúdo 2
          </Heading>
          <b>
            Através de um cardápio sugestivo com receitas deliciosas, você
            aprenderá os primeiros passos para fazer melhores escolhas
            alimentares e começar o seu processo de emagrecimento.
          </b>
        </Box>

        <Box
          bg="rgb(58,161,105)"
          height="auto"
          padding="20px"
          borderRadius="10px"
        >
          <Heading as="h2">
            {" "}
            <StarIcon w={8} h={8} color="gold" margin="1" /> Conteúdo 3
          </Heading>
          <b>
            Saiba como lidar com a ansiedade de forma equilibrada, aprenda a
            identificar gatilhos que te levam a compulsão alimentar e como lidar
            com eles.
          </b>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
