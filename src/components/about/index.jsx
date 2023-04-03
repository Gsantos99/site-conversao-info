import { Heading, Container, Box } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'
import React from "react";
import './style.css'

export default function About({title}){
  return(
  <div className="about">
     <Heading as='h2' mt='10'>{title}</Heading>
<Box display='flex' alignContent='center' mt='20px' mb='15px' >
 <Image
  borderRadius='18px'
  boxSize='150px'
  src='../src/assets/dany-photo.jpg'
  alt='Daniely Santos'
/>
<Heading as='h3' margin='10px' alignSelf='center'>Daniely Santos <br/> Nutricionista</Heading>
  
    </Box>

<p>
Daniely Santos graduada em nutrição há 2 anos e pós graduada em fitoterapia clínica, especialista em emagrecimento com o foco em ajudar mulheres a estarem o mais felizes possíveis com o seu corpo, elevar a autoestima se permitido comer o que gosta e viver a melhor versão de si. 
 </p>


    </div>)
}