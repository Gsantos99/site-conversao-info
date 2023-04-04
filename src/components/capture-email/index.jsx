import React from "react";
import {useState} from 'react'
import { Input,  Button, Heading, Container, Box} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { CalendarIcon } from '@chakra-ui/icons'



// Captura o email e manda para o whats 


export default function CaptureEmail(){

  const [email, setEmail] = useState(false);
   
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

   const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://chat.whatsapp.com/HasZa4PzPmSAJKOljb7jOL?email=$email=${encodeURIComponent(email)}'
    window.open(url, '_blank');

   }

  return(
  
  <Box as='section' >
   
    <Box as='div' className="capture-email" maxW='50vw' minWidth='350px' margin='0 auto' padding='10px'>
      <Heading as='h2' color='#3aa169'> Semana grátis com Daniely Santos </Heading>
      <Heading as='h5' fontSize='32px' mb='10px'>Procura-se mulheres do Norte e Nordeste que desejam muito emagrecer!</Heading>
    <Text>
    Se você está frustrada e já cansou de tantas dietas que não te trouxeram nenhum resultado, venha participar de um GRUPO GRATUITO no WhatsApp e aprender o passo a passo do emagrecimento eficiente, sem sofrimento e sem deixar de comer o que gosta.
    </Text>
   <form onSubmit={handleSubmit} target="_blank" action="https://formsubmit.co/giulyanofelipesantos@gmail.com" method="POST" >

     <Input placeholder='Digite seu email aqui' size='md' display='block' variant='filled'  focusBorderColor='green.400' marginTop='10' type='email'  name="email" onChange={handleEmailChange} />

     <input type="hidden" name="_autoresponse" value="Obrigado por se inscrever na semana grátis do Seca para o São João"></input>

     <input type="hidden" name="_subject" value="Nova inscrição no Seca!"></input>

     <input type="hidden" name="_cc" value="danielycostalipe@gmail.com"></input>

     

     
   <Button colorScheme='green' mt='10' size='lg' type='submit' disabled={!isEmailValid} >Eu quero entrar no grupo!</Button>
   
   
   </form>
  
   
    
 <Container mt='10' maxW='100wv'  display='flex' flexDirection='row' gap='10' justifyContent='center'>


<h2><CalendarIcon w={8} h={8} color='green.600' margin='2'/>DO DIA 09 AO DIA 16 DE JANEIRO</h2>
<h2><CalendarIcon w={8} h={8} color='green.600' margin='2'/>100% ONLINE</h2>
<h2><CalendarIcon w={8} h={8} color='green.600' margin='2'/>100% GRATUITO</h2>



</Container>

    </Box>
  </Box>)
}

 