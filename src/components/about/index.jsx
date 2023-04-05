import { Heading, Box, Text } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'
import React from "react";


export default function About({title}){
  return(
  <Box as='section' className="capture-email"  margin='0 auto' w='100%' h='content' bg='black' color='#ffff' padding='15px'>
    
     <Heading as='h1' mt='10'>{title}</Heading>

<Box as='div' display='flex' mt='10px' padding='15px'  margin='0 auto'

flexDirection='column'  >
 
 
<Heading as='h3' margin='10px'>Daniely Santos <br/> Nutricionista</Heading>

<Image 

  alignSelf='center'
  borderRadius='100%'
  boxSize='300px'
  src='../src/assets/daniely-photo.jpeg'
  alt='Daniely Santos'
  mb='20px'
/>

  <Text   alignSelf='center' minW='75%' >
  Sou nutricionista e atendo em consultório online e presencial com foco em grandes emagrecimentos. Estou aqui para te ajudar a chegar no seu grande objetivo, sem desistir, sendo seu braço direito em todo o processo de emagrecimento definitivo. <br></br>
  <br></br>
  Ele não é fácil, mas está longe de ser impossível
  Com experiência em atendimentos desenvolvi um método perfeito para que sua jornada em busca de uma vida sem doenças seja leve e divertida.
  Amo ver a transformação dos meus pacientes, a superação e o encontro com uma vida mais feliz proporcionado por hábitos mais saudáveis. 
 </Text>

    </Box>




    </Box>)
}