import React from "react";
import './style.css'
import { Input,  Button, Heading, Container} from "@chakra-ui/react";
import { CalendarIcon } from '@chakra-ui/icons'



// Captura o email e manda para o whats 


export default function CaptureEmail(){
  return(<div className="container">
    <div className="capture-email">
      <Heading lineHeight='tall'> Semana grátis com Daniely Santos </Heading>
      <h2>Procura-se mulheres que desejam muito emagrecer!</h2>
    <p>
    Se você está frustrada e já cansou de tantas dietas que não te trouxeram nenhum resultado, venha participar de um GRUPO GRATUITO no WhatsApp e aprender o passo a passo do emagrecimento eficiente, sem sofrimento e sem deixar de comer o que gosta.
    </p>
   
   <Input placeholder='Digite seu email aqui' size='md' display='block' variant='filled'  focusBorderColor='green.400' marginTop='10' />
   
   <a href="https://api.whatsapp.com/send?phone=5581984842820&text=Ol%C3%A1%20Daniely,%20eu%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20sua%20consulta"  target="_blank" >
   <Button colorScheme='green' mt='10' size='lg' >Eu quero entrar no grupo!</Button>
   </a>
    
 <Container mt='10' maxW='100wv'  display='flex' flexDirection='row' gap='10' justifyContent='center'>


<h2><CalendarIcon w={8} h={8} color='green.600' margin='2'/>DO DIA 09 AO DIA 16 DE JANEIRO</h2>
<h2><CalendarIcon w={8} h={8} color='green.600' margin='2'/>100% ONLINE</h2>
<h2><CalendarIcon w={8} h={8} color='green.600' margin='2'/>100% GRATUITO</h2>



</Container>
  

     
    </div>
  </div>)
}

 