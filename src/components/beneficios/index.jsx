import React from "react";
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/layout";
import { StarIcon } from '@chakra-ui/icons'

export default function Beneficios(){
  return(<>
      
      <Heading mt='10' mb='10'> O que você vai aprender? </Heading>

<SimpleGrid  spacing='40px'  columns={3} minChildWidth='250px'>
  
  <Box bg='rgb(58,161,105)'  height='auto' padding='20px' borderRadius='10px'>
    <Heading as='h2'> <StarIcon w={8} h={8} color='green.600' margin='1'/> Conteúdo 1 </Heading>
  <p>Você receberá desafios diários, que te ajudarão a se manter focada e motivada a realizar mudanças no seu dia a dia.</p>
</Box>

<Box bg='rgb(58,161,105)' height='auto' padding='20px' borderRadius='10px'>
    <Heading as='h2'> <StarIcon w={8} h={8} color='green.600' margin='1'/> Conteúdo 2</Heading>
  <p>Através de um cardápio sugestivo e receitas, você aprenderá os primeiros passos para fazer melhores escolhas alimentares e começar o seu processo de emagrecimento.</p>
</Box>

<Box bg='rgb(58,161,105)' height='auto' padding='20px' borderRadius='10px'>
    <Heading as='h2'> <StarIcon w={8} h={8} color='green.600' margin='1'/> Conteúdo 3</Heading>
  <p>Saiba como lidar com a ansiedade de forma equilibrada, aprenda a identificar gatilhos que te levam a compulsão alimentar e como lidar com eles.</p>
</Box>

</SimpleGrid>

  </>)
}