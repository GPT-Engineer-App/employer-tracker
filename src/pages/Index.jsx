import { useState } from "react";
import { Container, VStack, Input, Button, Text, Icon, useToast } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [employer, setEmployer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && employer) {
      setSubmitted(true);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {submitted ? (
        <VStack spacing={4} align="center">
          <Icon as={FaCheckCircle} w={24} h={24} color="green.500" />
          <Button
            colorScheme="teal"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              useToast({
                title: "Link copied!",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
            }}
          >
            Tell your friends
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4} width="100%">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Current Employer" value={employer} onChange={(e) => setEmployer(e.target.value)} />
          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
