import React from "react"
import { useState } from "react"
import { Button, Heading, Container, Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"

export default function Header() {
  const handleClick = () => {
    const url = "https://chat.whatsapp.com/LHOIdv4YqgLHlVn2gOf9kt"
    window.open(url, "_blank")
  }

  return (
    <Box as="section">
      <Box
        as="div"
        className="capture-email"
        maxW="50vw"
        minWidth="350px"
        margin="0 auto"
        padding="10px"
      >
        <Heading as="h2" color="#3aa169">
          {" "}
          Semana grátis com Daniely Santos{" "}
        </Heading>
        <Heading as="h5" fontSize="35px" mb="10px">
          Procura-se mulheres que desejam muito emagrecer!
        </Heading>
        <Text>
          Se você está frustrada e já cansou de tantas dietas que não te
          trouxeram nenhum resultado, venha participar de um GRUPO GRATUITO no
          WhatsApp e aprender o passo a passo do emagrecimento eficiente, sem
          sofrimento e sem deixar de comer o que gosta.
        </Text>

        <Button colorScheme="green" mt="10" size="lg" onClick={handleClick}>
          Eu quero entrar no grupo!
        </Button>

        <Container
          mt="10"
          maxW="100wv"
          display="flex"
          flexDirection="row"
          gap="10"
          justifyContent="center"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <CalendarIcon w={8} h={8} color="green.600" margin="1" /> DO DIA
            20/01 AO DIA 27/01 DE JANEIRO DE 2025
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CalendarIcon w={8} h={8} color="green.600" margin="1" /> 100%
            ONLINE{" "}
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CalendarIcon w={8} h={8} color="green.600" margin="1" /> 100%
            GRATUITO
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
